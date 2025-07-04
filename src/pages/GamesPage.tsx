
import { useState, useEffect, useRef, useCallback } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import SnakeGame from '@/components/SnakeGame';
import Minesweeper from '@/components/MineSweeper';
import CustomRevealGame from '@/components/MineSweeper2';



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
          <Card>
            <CardHeader>
              <CardTitle>踩地雷</CardTitle>
              <CardDescription>
                一個簡單的踩地雷遊戲
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Minesweeper />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>踩地雷</CardTitle>
              <CardDescription>
                一個簡單的踩地雷遊戲
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CustomRevealGame />
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </Layout>
  );
};



export default GamesPage;
