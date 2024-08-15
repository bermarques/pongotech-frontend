import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { TypographyH1 } from "./styles";

const Home = () => {
  return (
    <>
      <TypographyH1>Game Sessions</TypographyH1>
      <div className="flex gap-4 flex-wrap">
        <Card className="w-[400px] shrink-0">
          <CardHeader>
            <CardTitle>Player1's session</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p className="text-base">Players: 1</p>
              <p className="text-base">Map: Desert</p>
              <p className="text-base">Mode: Survival</p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-[400px] shrink-0">
          <CardHeader>
            <CardTitle>Player1's session</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p className="text-base">Players: 1</p>
              <p className="text-base">Map: Desert</p>
              <p className="text-base">Mode: Survival</p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-[400px] shrink-0">
          <CardHeader>
            <CardTitle>Player1's session</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p className="text-base">Players: 1</p>
              <p className="text-base">Map: Desert</p>
              <p className="text-base">Mode: Survival</p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-[400px] shrink-0">
          <CardHeader>
            <CardTitle>Player1's session</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p className="text-base">Players: 1</p>
              <p className="text-base">Map: Desert</p>
              <p className="text-base">Mode: Survival</p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-[400px] shrink-0">
          <CardHeader>
            <CardTitle>Player1's session</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p className="text-base">Players: 1</p>
              <p className="text-base">Map: Desert</p>
              <p className="text-base">Mode: Survival</p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-[400px] shrink-0">
          <CardHeader>
            <CardTitle>Player1's session</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p className="text-base">Players: 1</p>
              <p className="text-base">Map: Desert</p>
              <p className="text-base">Mode: Survival</p>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Home;
