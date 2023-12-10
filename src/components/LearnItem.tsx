import { CopyIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Learn } from "@/models/learn"
import { Textarea } from "./ui/textarea"

export function LearnItemComponent({ title, description, tags, createdAt }: Learn) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button asChild>
          <article className='cursor-pointer shrink-0 bg-slate-900 h-72 max-h-80 w-full max-w-xs flex flex-col justify-center items-start capitalize text-slate-50 p-4 rounded-md dark:hover:text-slate-900 duration-200 transition-all'>
            {title}
          </article>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            <Textarea disabled>
              {description}
            </Textarea>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button variant={"outline"}>
            Guardar cambios
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function CopyItemComponent({ textToCopy }: { textToCopy: string }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="grid flex-1 gap-2">
        <Label htmlFor="textToCopy" className="sr-only">
          Text
        </Label>
        <Input
          id="textToCopy"
          defaultValue={textToCopy}
          readOnly
        />
      </div>
      <Button type="submit" size="sm" className="px-3">
        <span className="sr-only">Copy</span>
        <CopyIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}