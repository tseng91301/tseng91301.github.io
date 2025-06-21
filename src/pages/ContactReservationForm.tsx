import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from '@/components/ui/sonner';

const ContactReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
    message: '',
    other: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    console.log(JSON.stringify(formData));

    try {
      // 'https://my-line-api.onrender.com/time_reservation http://192.168.196.49:5000/time_reservation'
      const response = await fetch('https://my-line-api.onrender.com/time_reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', contact: '', date: '', message: '', other: '' });
        toast.success('表單送出成功！'); // ✅ 成功提示
      } else {
        throw new Error('提交失敗');
      }
    } catch (error) {
      console.error('送出表單時發生錯誤:', error);
      setStatus('error');
      toast.error('發生錯誤，請稍後再試'); // ❌ 錯誤提示
    }
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">聯絡 / 預約表單</h2>

          {status === 'success' && (
            <p className="mb-4 p-3 bg-green-100 text-green-700 border border-green-300 rounded">
              表單已送出，感謝你的填寫！ 請等待我透過您給的聯絡方式聯絡到你，才算是預約成功喔~
            </p>
          )}
          {status === 'error' && (
            <p className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded">
              發生錯誤，請稍後再試。
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">姓名或暱稱</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">你的聯絡方式</label>
              <input
                required
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">預約日期</label>
              <input
                required
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">簡單說明</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                rows={4}
              ></textarea>
            </div>

            <div>
              <label className="block mb-1 font-medium">其他想說的話</label>
              <textarea
                name="other"
                value={formData.other}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                rows={4}
              ></textarea>
            </div>

            <div className="text-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? '送出中...' : '送出'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default ContactReservationForm;
