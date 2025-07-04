import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const GRID_SIZE = 10;
const CELL_SIZE = 40;

interface MemeWithImg {
  meme_text: string;
  img_link: string;
  img_uri: string;
}

const predefinedStrings: MemeWithImg[] = [
  {
    meme_text: "114514",
    img_link: "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2025/05/14/0/32040163.png&x=0&y=0&sw=0&sh=0&exp=3600&sl=W&&fw=800",
    img_uri: "https://zh.wikipedia.org/zh-tw/114514",
  },
  {
    meme_text: "51121511121",
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwL7SOdMDeaSOS_wKM26UoTEoC4esQKMa7w&s",
    img_uri: "https://www.bilibili.com/video/BV14M4y1h7jd/",
  },
  {
    meme_text: "菜菜撈撈",
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0LbbWmCrhyhvg3LHMPKRJLm50NnzaGIUs0A&s",
    img_uri: "https://www.tiktok.com/@samsunga35a34/video/7500154402062355767",
  },
  {
    meme_text: "回答我！",
    img_link: "https://cdn.hk01.com/di/media/images/dw/20250418/989916224576032768489561.jpeg/e9bafRaNnUjnFMxIvPQYlrINBsmyfx7aNu4ZkTbuGZE?v=w1920",
    img_uri: "https://www.youtube.com/watch?v=iCzse-Wutmg",
  },
  {
    meme_text: "啊能能能~~",
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPnUPEaAtZqwrdkxv_wubVxTHdvm2cnpu_w&s",
    img_uri: "https://www.instagram.com/reel/DIMGPmYPVaB/",
  },
  {
    meme_text: "我爸得了MVP",
    img_link: "https://lh5.googleusercontent.com/proxy/jwtJVgQCee-ueH2yj7wBT4MmWLKOE-tEd7LRzD0fwztAzzzGm2J8QmFGmKh_OPaLUiQTSqh-5R2cpHgYuzgkpLwcAkFFhd2SqiA-jUpcGZjzFrf8k1aipDuPUloRJYM",
    img_uri: "https://www.youtube.com/watch?v=FuASNiDdAPE",
  },
  {
    meme_text: "那一天的憂鬱憂鬱起來",
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ80j6klnKCa6qx6X2SLfI5lKxgU2WsvS4mQ&s",
    img_uri: "https://www.youtube.com/watch?v=tAWl9oiFmx8&list=RDtAWl9oiFmx8&start_radio=1",
  },
  {
    meme_text: "喔痛苦！",
    img_link: "https://i.ytimg.com/vi/8Z7NRa0tTF0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgUShAMA8=&rs=AOn4CLAjBcYS7swTBD2SWNt_rmS3L__bZg",
    img_uri: "https://www.youtube.com/watch?v=PdxPmAZFoHI",
  },
  {
    meme_text: "tralalerotralala",
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshTrJdrHjphqiEQUQa4tO5GBCCwPYYHkkUA&s",
    img_uri: "https://www.youtube.com/shorts/CFZe0aCKHbk",
  },
  {
    meme_text: "sahur",
    img_link: "https://i1.sndcdn.com/artworks-YDQOy2Pru5CA2rhs-x1uzgA-t500x500.jpg",
    img_uri: "https://www.youtube.com/shorts/nYx-2PbomEY",
  }
];

const CustomRevealGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [grid, setGrid] = useState<string[][]>([]);
  const [targetString, setTargetString] = useState<MemeWithImg>(null);
  const [revealedCount, setRevealedCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [showResult, setShowResult] = useState(false);

  const createEmptyGrid = (): string[][] => {
    return Array.from({ length: GRID_SIZE }, () =>
      Array.from({ length: GRID_SIZE }, () => "")
    );
  };

  const resetGame = () => {
    const randomString =
      predefinedStrings[
        Math.floor(Math.random() * predefinedStrings.length)
      ];
    setTargetString(randomString);
    setGrid(createEmptyGrid());
    setRevealedCount(0);
    setIsGameOver(false);
    setIsPaused(true);
    setShowResult(false);
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isPaused || isGameOver) return;

    const rect = canvasRef.current!.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / CELL_SIZE);
    const y = Math.floor((e.clientY - rect.top) / CELL_SIZE);

    setGrid((prevGrid) => {
      const newGrid = JSON.parse(JSON.stringify(prevGrid));
      if (newGrid[y][x] === "") {
        newGrid[y][x] = targetString.meme_text[revealedCount] || "";
      }
      return newGrid;
    });

    setRevealedCount((prev) => {
      const next = prev + 1;
      if (next >= targetString.meme_text.length) {
        setIsGameOver(true);
        setTimeout(() => {
          setShowResult(true);
        }, 100);
      }
      return next;
    });
  };

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    grid.forEach((row, y) => {
      row.forEach((cell, x) => {
        const px = x * CELL_SIZE;
        const py = y * CELL_SIZE;

        ctx.strokeStyle = "#999";
        ctx.strokeRect(px, py, CELL_SIZE, CELL_SIZE);

        ctx.fillStyle = "#eee";
        ctx.fillRect(px, py, CELL_SIZE, CELL_SIZE);

        if (cell) {
          ctx.fillStyle = "black";
          ctx.font = "16px sans-serif";
          ctx.fillText(cell, px + CELL_SIZE / 3, py + CELL_SIZE / 1.5);
        }
      });
    });
  }, [grid]);

  return (
    <div className="flex flex-col items-center space-y-4 relative">
      <div className="flex items-center space-x-2">
        {!isGameOver ? (
          <Button onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? "開始遊戲" : "暫停"}
          </Button>
        ) : (
          <Button onClick={resetGame}>重新開始</Button>
        )}
      </div>

      <canvas
        ref={canvasRef}
        width={GRID_SIZE * CELL_SIZE}
        height={GRID_SIZE * CELL_SIZE}
        className="border border-gray-400 cursor-pointer"
        onClick={handleCanvasClick}
      />

      {isPaused && !isGameOver && (
        <div className="text-center text-gray-600">按「開始遊戲」來玩</div>
      )}

      {isGameOver && (
        <div className="text-center text-green-600 font-bold">
          遊戲完成！
        </div>
      )}

      {showResult && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col">
            <h2 className="text-xl font-bold mb-4">恭喜你獲得了!</h2>
            <p className="mb-4">{targetString.meme_text}</p>
            <a
              href={targetString.img_uri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4"
            >
              <img
                src={targetString.img_link}
                alt="示意圖片"
                className="mx-auto rounded mx-auto max-w-[300px] min-w-[150px]"
              />
            </a>
            <Button onClick={() => setShowResult(false)}>關閉</Button>
          </div>
        </div>
      )}

      <div className="text-sm text-gray-500 text-center">
        點擊格子，依序顯示完整字串
      </div>
    </div>
  );
};

export default CustomRevealGame;