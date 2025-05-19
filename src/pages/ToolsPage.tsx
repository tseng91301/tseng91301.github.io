
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CopyIcon, CheckIcon, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

const ToolsPage = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  // Define tools with their states and handlers
  const [sha256Input, setSha256Input] = useState('');
  const [sha256Output, setSha256Output] = useState('');
  const [base64Text, setBase64Text] = useState('');
  const [base64Result, setBase64Result] = useState('');
  const [calcInput, setCalcInput] = useState('');
  const [calcResult, setCalcResult] = useState('');

  // SHA-256 Hash Conversion
  const generateSHA256 = async () => {
    if (!sha256Input) return;
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(sha256Input);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setSha256Output(hashHex);
    } catch (error) {
      console.error('Error generating SHA-256 hash:', error);
      setSha256Output('Error generating hash');
    }
  };

  // Base64 Encoding/Decoding
  const encodeToBase64 = () => {
    try {
      const encoded = btoa(base64Text);
      setBase64Result(encoded);
    } catch (error) {
      console.error('Error encoding to Base64:', error);
      setBase64Result('Error encoding to Base64');
    }
  };

  const decodeFromBase64 = () => {
    try {
      const decoded = atob(base64Text);
      setBase64Result(decoded);
    } catch (error) {
      console.error('Error decoding from Base64:', error);
      setBase64Result('Invalid Base64 string');
    }
  };

  // Basic Calculus Calculator
  const calculateDerivative = () => {
    // This is a very basic implementation - you might want to use a proper math library
    // for more complex calculations
    try {
      // Simple power rule example: if input is x^2, derivative is 2x
      const input = calcInput.trim().toLowerCase();
      if (input.match(/^x\^(\d+)$/)) {
        const power = parseInt(input.split('^')[1]);
        if (power === 0) {
          setCalcResult('0');
        } else if (power === 1) {
          setCalcResult('1');
        } else {
          setCalcResult(`${power}x^${power - 1}`);
        }
      } else {
        setCalcResult('請輸入形如 x^n 的表達式');
      }
    } catch (error) {
      setCalcResult('計算錯誤');
    }
  };

  const tools = [
    {
      title: 'SHA-256 雜湊工具',
      description: '將任何文字轉換成 SHA-256 雜湊值',
      content: (
        <div className="space-y-4">
          <Input
            placeholder="輸入要進行雜湊的文字..."
            value={sha256Input}
            onChange={(e) => setSha256Input(e.target.value)}
          />
          <Button onClick={generateSHA256} className="w-full">
            生成 SHA-256 雜湊
          </Button>
          {sha256Output && (
            <div className="flex">
              <Input value={sha256Output} readOnly className="font-mono" />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(sha256Output)}
                className="ml-2"
              >
                {isCopied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
              </Button>
            </div>
          )}
        </div>
      )
    },
    {
      title: 'Base64 編碼/解碼工具',
      description: '可以將文字進行 Base64 編碼或將 Base64 字串解碼',
      content: (
        <div className="space-y-4">
          <Input
            placeholder="輸入文字或Base64編碼..."
            value={base64Text}
            onChange={(e) => setBase64Text(e.target.value)}
          />
          <div className="flex space-x-2">
            <Button onClick={encodeToBase64} className="w-1/2">
              編碼成 Base64
            </Button>
            <Button onClick={decodeFromBase64} className="w-1/2">
              Base64 解碼
            </Button>
          </div>
          {base64Result && (
            <div className="flex">
              <Input value={base64Result} readOnly />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(base64Result)}
                className="ml-2"
              >
                {isCopied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
              </Button>
            </div>
          )}
        </div>
      )
    },
    {
      title: '微積分計算工具',
      description: '計算基本的導數（目前支援 x^n 的形式）',
      content: (
        <div className="space-y-4">
          <Input
            placeholder="輸入函數（例如：x^2）..."
            value={calcInput}
            onChange={(e) => setCalcInput(e.target.value)}
          />
          <Button onClick={calculateDerivative} className="w-full">
            <Calculator className="w-4 h-4 mr-2" />
            計算導數
          </Button>
          {calcResult && (
            <div className="flex">
              <Input value={calcResult} readOnly />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(calcResult)}
                className="ml-2"
              >
                {isCopied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
              </Button>
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">小工具</h1>
          <p className="text-gray-600 text-center mb-8">在這裡你可以使用一些常用的網頁小工具</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {tool.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ToolsPage;
