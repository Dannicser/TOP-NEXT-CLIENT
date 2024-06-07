import { Htag, Button } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Title</Htag>
      <Button arrow="right">Primary</Button>
      <Button arrow="right" appearance="ghost">
        Ghost
      </Button>
    </>
  );
}
