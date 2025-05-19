
import { useState, useEffect, useRef, useCallback } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Define types for Snake game
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GamesPage = () => {
  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">小遊戲</h1>
          <p className="text-gray-600 text-center mb-8">在這裡你可以玩一些經典的小遊戲</p>
          
          <Card>
            <CardHeader>
              <CardTitle>貪食蛇</CardTitle>
              <CardDescription>
                經典的貪食蛇遊戲，使用鍵盤方向鍵控制
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SnakeGame />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </Layout>
  );
};

const SnakeGame = () => {
  const GRID_SIZE = 20;
  const CELL_SIZE = 20;
  const GAME_SPEED = 150;
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [score, setScore] = useState(0);
  
  const directionRef = useRef(direction);
  
  // Create random food position
  const createRandomFood = useCallback(() => {
    const x = Math.floor(Math.random() * GRID_SIZE);
    const y = Math.floor(Math.random() * GRID_SIZE);
    // Ensure food doesn't appear on snake
    const isOnSnake = snake.some(segment => segment.x === x && segment.y === y);
    if (isOnSnake) return createRandomFood();
    return { x, y };
  }, [snake]);
  
  // Initialize game
  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection('RIGHT');
    directionRef.current = 'RIGHT';
    setFood(createRandomFood());
    setIsGameOver(false);
    setScore(0);
    setIsPaused(true);
  };
  
  // Handle direction changes
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Prevent reversing
    if (e.key === 'ArrowUp' && directionRef.current !== 'DOWN') {
      directionRef.current = 'UP';
    } else if (e.key === 'ArrowDown' && directionRef.current !== 'UP') {
      directionRef.current = 'DOWN';
    } else if (e.key === 'ArrowLeft' && directionRef.current !== 'RIGHT') {
      directionRef.current = 'LEFT';
    } else if (e.key === 'ArrowRight' && directionRef.current !== 'LEFT') {
      directionRef.current = 'RIGHT';
    }
  }, []);
  
  // Handle game logic
  useEffect(() => {
    if (isPaused || isGameOver) return;
    
    const gameInterval = setInterval(() => {
      setDirection(directionRef.current);
      
      setSnake(prevSnake => {
        // Create new head based on direction
        let newHead: Position;
        switch (directionRef.current) {
          case 'UP':
            newHead = { x: prevSnake[0].x, y: prevSnake[0].y - 1 };
            break;
          case 'DOWN':
            newHead = { x: prevSnake[0].x, y: prevSnake[0].y + 1 };
            break;
          case 'LEFT':
            newHead = { x: prevSnake[0].x - 1, y: prevSnake[0].y };
            break;
          case 'RIGHT':
            newHead = { x: prevSnake[0].x + 1, y: prevSnake[0].y };
            break;
          default:
            newHead = { x: prevSnake[0].x + 1, y: prevSnake[0].y };
        }
        
        // Check for collision with walls
        if (
          newHead.x < 0 || 
          newHead.x >= GRID_SIZE || 
          newHead.y < 0 || 
          newHead.y >= GRID_SIZE
        ) {
          setIsGameOver(true);
          return prevSnake;
        }
        
        // Check for collision with self
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setIsGameOver(true);
          return prevSnake;
        }
        
        let newSnake = [newHead, ...prevSnake];
        
        // Check for food
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(createRandomFood());
          setScore(prev => prev + 1);
        } else {
          // Remove tail if no food eaten
          newSnake.pop();
        }
        
        return newSnake;
      });
    }, GAME_SPEED);
    
    return () => clearInterval(gameInterval);
  }, [isPaused, isGameOver, food, createRandomFood]);
  
  // Setup canvas and event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  
  // Draw game on canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);
    
    // Draw border
    ctx.strokeStyle = '#ccc';
    ctx.strokeRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);
    
    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(
      food.x * CELL_SIZE, 
      food.y * CELL_SIZE, 
      CELL_SIZE, 
      CELL_SIZE
    );
    
    // Draw snake
    snake.forEach((segment, index) => {
      // Head is darker, body gets gradually lighter
      const colorValue = Math.min(70 + (index * 5), 150);
      ctx.fillStyle = `rgb(60, ${colorValue}, 100)`;
      ctx.fillRect(
        segment.x * CELL_SIZE, 
        segment.y * CELL_SIZE, 
        CELL_SIZE, 
        CELL_SIZE
      );
      
      // Draw border for snake segments
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.strokeRect(
        segment.x * CELL_SIZE, 
        segment.y * CELL_SIZE, 
        CELL_SIZE, 
        CELL_SIZE
      );
    });
  }, [snake, food, CELL_SIZE, GRID_SIZE]);
  
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="mb-2 flex items-center justify-between w-full">
        <span className="text-lg font-medium">得分: {score}</span>
        <div className="space-x-2">
          {!isGameOver ? (
            <Button 
              onClick={() => setIsPaused(!isPaused)} 
              variant={isPaused ? "default" : "outline"}
            >
              {isPaused ? "開始遊戲" : "暫停"}
            </Button>
          ) : (
            <Button onClick={resetGame}>重新開始</Button>
          )}
        </div>
      </div>
      
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={GRID_SIZE * CELL_SIZE}
          height={GRID_SIZE * CELL_SIZE}
          className="border border-gray-300"
        />
        
        {isPaused && !isGameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white font-bold text-xl">
            按「開始遊戲」來玩
          </div>
        )}
        
        {isGameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
            <p className="font-bold text-xl mb-2">遊戲結束</p>
            <p className="mb-4">得分: {score}</p>
            <Button onClick={resetGame} variant="secondary">重新開始</Button>
          </div>
        )}
      </div>
      
      <div className="text-sm text-gray-500 text-center">
        使用鍵盤方向鍵 ↑ ← ↓ → 來控制蛇的方向
      </div>
    </div>
  );
};

export default GamesPage;
