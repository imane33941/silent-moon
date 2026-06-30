import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export function useAsyncStorage<T>(
  key: string,
  initialValue?: T,
): [T | null, (value: T) => void, boolean] {
  const [value, setValue] = useState<T | null>(initialValue ?? null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const value = await AsyncStorage.getItem(key);
      setValue(value ? JSON.parse(value) : (initialValue ?? null));
      setLoading(false);
    };
    load();
  }, [key]);

  const save = async (value: T) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, save, loading];
}
