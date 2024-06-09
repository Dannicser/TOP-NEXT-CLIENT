import { useState } from "react";
import { Htag, Button, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(0);

  return (
    <>
      <Htag tag="h1">Title</Htag>
      <Paragraph>
        Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки
        хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры
        ищут его в разных местах.
      </Paragraph>
      <Tag color="ghost">ghost</Tag>
      <Tag color="green">green</Tag>
      <Tag color="grey">grey</Tag>
      <Tag color="primary">primary</Tag>
      <Tag color="red">red</Tag>
      <br />
      <br />
      <Button arrow="right">Primary</Button>
      <Button arrow="right" appearance="ghost">
        Ghost
      </Button>{" "}
      <br />
      <br />
      <Rating setRating={setRating} rating={rating} />
    </>
  );
}

export default withLayout(Home);
