"use client";
interface RoutinesContainerProps {
  children: React.ReactNode;
}
const RoutinesContainer = ({ children }: RoutinesContainerProps) => {
  return (
    <div className="flex justify-center  my-5 flex-row">
      <div className="w-[75%] flex flex-wrap gap-8">{children}</div>
    </div>
  );
};

export default RoutinesContainer;
