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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { ICreateSession } from "./types";

const formSchema = z.object({
  hostname: z.string().min(2, {
    message: "Hostname must be at least 2 characters.",
  }),
  players: z.string({ required_error: "Please select the amount of players" }),
  map: z.string({ required_error: "Please select the map" }),
  mode: z.string({ required_error: "Please select the game mode" }),
});

const CreateSession: React.FC<ICreateSession> = ({ children }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      hostname: "Player1's session",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    alert(JSON.stringify(values));
  };
  const handleClose = () => {
    reset();
  };

  return (
    <Dialog
      modal
      onOpenChange={(visible) => {
        if (!visible) handleClose();
      }}
    >
      {children}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create session</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="hostname" className="text-right">
                Name
              </Label>
              <Input
                {...register("hostname")}
                id="hostname"
                defaultValue="Player1's session"
                className="col-span-3"
              />
              {errors.hostname && (
                <p
                  role="alert"
                  className="text-sm text-red-400 col-span-3 col-start-2"
                >
                  {errors.hostname?.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="players" className="text-right">
                Players
              </Label>
              <Controller
                name="players"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
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
                )}
              />
              {errors.players && (
                <p
                  role="alert"
                  className="text-sm text-red-400 col-span-3 col-start-2"
                >
                  {errors.players?.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="map" className="text-right">
                Map
              </Label>
              <Controller
                name="map"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
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
                )}
              />
              {errors.map && (
                <p
                  role="alert"
                  className="text-sm text-red-400 col-span-3 col-start-2"
                >
                  {errors.map?.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="players" className="text-right">
                Mode
              </Label>
              <Controller
                name="mode"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
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
                )}
              />
              {errors.mode && (
                <p
                  role="alert"
                  className="text-sm text-red-400 col-span-3 col-start-2"
                >
                  {errors.mode?.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create session</Button>
          </DialogFooter>
        </form>
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
