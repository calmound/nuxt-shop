import { useDisplay } from 'vuetify'
import { MOBILE_WIDTH } from '../constant/index'

export const isMobile = () => {
  const { width } = useDisplay()
  return width.value <= MOBILE_WIDTH
}

export const isEqual = (value:any, other:any) => {
  // 获取两个比较值的类型
  const type = Object.prototype.toString.call(value);

  // 检查类型是否相同
  if (type !== Object.prototype.toString.call(other)) return false;

  // 根据不同的数据类型进行比较
  if (type === '[object Object]' || type === '[object Array]') {
    // 比较数组或对象的长度
    const valueLen = type === '[object Object]' ? Object.keys(value).length : value.length;
    const otherLen = type === '[object Object]' ? Object.keys(other).length : other.length;
    if (valueLen !== otherLen) return false;

    // 递归比较数组或对象中的每个元素
    const compare = (item1, item2) => {
      for (const key in item1) {
        if (!isEqual(item1[key], item2[key])) return false;
      }
      return true;
    };

    return compare(value, other);
  } else {
    // 基本数据类型直接比较
    return value === other;
  }
}