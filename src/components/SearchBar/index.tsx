import { FC } from "react";

interface IProps {
  value: string;
  setValue: (e: string) => void;
}
export const SearchBar: FC<IProps> = ({ value, setValue }) => {
  return (
    <div>
      <input
        className="bg-[lightgrey] border-0 rounded-md h-[30px] w-full p-2"
        placeholder="Start typing..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
