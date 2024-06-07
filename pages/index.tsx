import { Htag, Button, Paragraph } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Title</Htag>
      <Paragraph>
        Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки
        хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры
        ищут его в разных местах.
      </Paragraph>
      <Button arrow="right">Primary</Button>
      <Button arrow="right" appearance="ghost">
        Ghost
      </Button>
    </>
  );
}
