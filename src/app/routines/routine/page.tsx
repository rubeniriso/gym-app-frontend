import WeekThumbnail from "@/components/ui/weeks/WeekThumbnail";
import WeekWrapper from "@/components/ui/weeks/WeekWrapper";
import { getAllRotuineWeeks } from "@/model/Week.model";
import { Week } from "@/types/week";

const Page = async () => {
  const weeks: Week[] = await getAllRotuineWeeks(1);
  return (
    <WeekWrapper>
      {weeks &&
        weeks.map((week: Week, index) => (
          <WeekThumbnail key={index} week={week} />
        ))}
    </WeekWrapper>
  );
};

export default Page;
