import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { ICreateSession } from "./types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

const CreateSession: React.FC<ICreateSession> = ({ children }) => {
  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create session</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Player1's session"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="players" className="text-right">
              Players
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Number of players" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="map" className="text-right">
              Map
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Choose a map" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="desert">Desert</SelectItem>
                  <SelectItem value="forest">Forest</SelectItem>
                  <SelectItem value="city">City</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="players" className="text-right">
              Mode
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a game mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="survival">Survival</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="battle">Battle</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create session</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const Trigger = () => (
  <DialogTrigger asChild>
    <Button>New Game</Button>
  </DialogTrigger>
);

export default CreateSession;
