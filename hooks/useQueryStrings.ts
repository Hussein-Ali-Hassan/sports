import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface Queries {
  [key: string]: boolean | string | number | string[];
}

export function useQueryStrings() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function appendQueries(queries: Queries) {
    //parse to the URLSearchParams
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    //loop over queries and add the key,value to the updated search params
    for (const [key, value] of Object.entries(queries)) {
      updatedSearchParams.set(key, value.toString());
    }

    router.push(`${pathname}?${updatedSearchParams}`);
  }

  const resetAllQueries = () => {
    router.replace(pathname, { scroll: false });
  };

  const prevQueries = Object.fromEntries(searchParams.entries());

  return {
    router,
    prevQueries,
    appendQueries,
    resetAllQueries,
  };
}
