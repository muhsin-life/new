import { SearchSuggestionProps } from "@/types/searchSuggestions";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface searchSuggestionProps {
  open: boolean;
  data?: SearchSuggestionProps;
  isLoading: boolean;
  close: () => void;
}

export const SearchSuggestion = ({
  open,
  data,
  isLoading,
  close,
}: searchSuggestionProps) => {
  return (
    <div
      onClick={() => close()}
      className={cn(
        "absolute inset-x-0 top-full text-sm text-muted-foreground z-50",
        {
          "animate-in fade-in-10 slide-in-from-top-5": open,
        }
      )}
    >
      <div
        className="absolute inset-0 top-1/2 bg-white shadow"
        aria-hidden="true"
      />

      <div className="relative bg-white p-3">
        {isLoading ? (
          <div>loading...</div>
        ) : (
          <div>
            <div className="flex flex-col-gap-2">
              <h6 className=" font-medium text-primary">Trending Searches</h6>
              <div className="flex items-center gap-1 line-clamp-1">
                {data?.results[1].hits.map((suggestion) => (
                  <Button variant={"secondary"}>{suggestion.query}</Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
