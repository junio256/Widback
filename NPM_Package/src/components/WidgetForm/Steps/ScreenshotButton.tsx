import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../loading";
interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end  text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right Bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>

    )
  }

  return (
    <>
      <button
        type="button"
        onClick={handleTakeScreenshot}
        className="p-2 text-lightText-900 dark:text-darkText-100 bg-lightSurface-400 dark:bg-darkSurface-800 rounded-md border-transparent hover:bg-lightSurface-600 dark:hover:bg-darkSurface-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-darkSurface-800 focus:ring-brand-500 "
      >
        {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
      </button>
    </>
  )
}