import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button className="top-5 right-5 absolute text-lightText-900 hover:text-lightText-600 dark:text-darkText-400 dark:hover:text-darkText-100" title="Close feedback form">
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}