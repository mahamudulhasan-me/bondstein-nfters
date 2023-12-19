import { candal } from "@/app/layout";

const Counter = ({ title, number }) => {
  return (
    <div>
      <h1 className={`text-text-dark text-4xl ${candal.className}`}>
        {number}K+
      </h1>
      <p className="text-text-light ml-1">{title}</p>
    </div>
  );
};

export default Counter;
