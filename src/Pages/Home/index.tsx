import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { TypographyH1 } from "./styles";
import ModalContainer, { Trigger } from "./modal";
import { ModeToggle } from "@/Components/mode-toggle";

const Home = () => {
  return (
    <ModalContainer>
      <div className="flex justify-between">
        <div className="flex gap-8">
          <TypographyH1>Game Sessions</TypographyH1>
          <Trigger />
        </div>
        <ModeToggle />
      </div>
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
    </ModalContainer>
  );
};

export default Home;
