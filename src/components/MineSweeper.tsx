import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const GRID_SIZE = 10;
const CELL_SIZE = 40;
const MINE_COUNT = 10;

// Type definitions
type Cell = {
  x: number;
  y: number;
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  adjacentMines: number;
};

const Minesweeper = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const createEmptyGrid = (): Cell[][] => {
    return Array.from({ length: GRID_SIZE }, (_, y) =>
      Array.from({ length: GRID_SIZE }, (_, x) => ({
        x,
        y,
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        adjacentMines: 0,
      }))
    );
  };

  const placeMines = (grid: Cell[][]) => {
    let minesPlaced = 0;
    while (minesPlaced < MINE_COUNT) {
      const x = Math.floor(Math.random() * GRID_SIZE);
      const y = Math.floor(Math.random() * GRID_SIZE);
      if (!grid[y][x].isMine) {
        grid[y][x].isMine = true;
        minesPlaced++;
      }
    }
  };

  const calculateAdjacents = (grid: Cell[][]) => {
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        if (grid[y][x].isMine) continue;
        let count = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const ny = y + dy;
            const nx = x + dx;
            if (
              ny >= 0 && ny < GRID_SIZE &&
              nx >= 0 && nx < GRID_SIZE &&
              grid[ny][nx].isMine
            ) {
              count++;
            }
          }
        }
        grid[y][x].adjacentMines = count;
      }
    }
  };

  const resetGame = () => {
    const newGrid = createEmptyGrid();
    placeMines(newGrid);
    calculateAdjacents(newGrid);
    setGrid(newGrid);
    setIsGameOver(false);
    setIsPaused(true);
  };

  const revealCell = (x: number, y: number, grid: Cell[][]): Cell[][] => {
    const cell = grid[y][x];
    if (cell.isRevealed || cell.isFlagged) return grid;

    cell.isRevealed = true;

    if (cell.isMine) {
      setIsGameOver(true);
      return grid;
    }

    if (cell.adjacentMines === 0) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const ny = y + dy;
          const nx = x + dx;
          if (
            ny >= 0 && ny < GRID_SIZE &&
            nx >= 0 && nx < GRID_SIZE &&
            !grid[ny][nx].isRevealed
          ) {
            grid = revealCell(nx, ny, grid);
          }
        }
      }
    }

    return grid;
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isPaused || isGameOver) return;

    const rect = canvasRef.current!.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / CELL_SIZE);
    const y = Math.floor((e.clientY - rect.top) / CELL_SIZE);

    setGrid((prevGrid) => {
      const newGrid = JSON.parse(JSON.stringify(prevGrid));
      const updatedGrid = revealCell(x, y, newGrid);
      return [...updatedGrid];
    });
  };

  // Draw game board
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    grid.forEach((row) => {
      row.forEach((cell) => {
        const px = cell.x * CELL_SIZE;
        const py = cell.y * CELL_SIZE;

        ctx.strokeStyle = "#999";
        ctx.strokeRect(px, py, CELL_SIZE, CELL_SIZE);

        if (cell.isRevealed) {
          if (cell.isMine) {
            ctx.fillStyle = "red";
            ctx.fillRect(px, py, CELL_SIZE, CELL_SIZE);
          } else {
            ctx.fillStyle = "#eee";
            ctx.fillRect(px, py, CELL_SIZE, CELL_SIZE);
            if (cell.adjacentMines > 0) {
              ctx.fillStyle = "black";
              ctx.font = "16px sans-serif";
              ctx.fillText(
                cell.adjacentMines.toString(),
                px + CELL_SIZE / 3,
                py + CELL_SIZE / 1.5
              );
            }
          }
        } else {
          ctx.fillStyle = "#ccc";
          ctx.fillRect(px, py, CELL_SIZE, CELL_SIZE);
        }
      });
    });
  }, [grid]);

  useEffect(() => {
    resetGame();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
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
        <div className="text-center text-red-600 font-bold">遊戲結束！踩到地雷了！</div>
      )}

      <div className="text-sm text-gray-500 text-center">
        點擊格子來揭示，避開地雷！
      </div>
    </div>
  );
};

export default Minesweeper;
