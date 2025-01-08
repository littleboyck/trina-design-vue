export function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

export function isFun(fn) {
  return typeof fn === 'function';
}

export function isStr(str) {
  return typeof str === 'string';
}

export function getVal(obj, expr) {
  return expr.split('.').reduce((o, key) => o && o[key], obj)
}

export function kebabCase(str) {
  return str.replace(/[A-Z]/g, (x) => '-'+x.toLowerCase())
}

// 防抖函数
export function debounce(handle, wait =300) {
  let timer;
  return function(...args) {
    //清空上一次定时器
    timer &&　clearTimeout(timer)
    timer = setTimeout(()=>{
      handle.apply(this,args);
    }, wait);
  }
};

/**
 * {
 *    onSelectChange: () => {},
 *    onClick: () => {}
 * }
 * ==>
 * {
 *  select-change: () => 
 *  click: () =>
 * }
 */
export function eventsKebabCase(obj) {
  if (!isObject(obj)) return obj;
  return Object.keys(obj).reduce((events, key) => {
    let eventName = key.replace(/^on/, '');
    eventName = eventName.charAt(0)
    .toLowerCase()+eventName.substring(1)
    .replace(/[A-Z]/g, (x) => '-'+x.toLowerCase())
    events[eventName] = obj[key];
    return events;
  }, {})
}

// 获取指定的键
export function pick(target, keys) {
  if (!keys) return target;
  return Object.keys(target).reduce((newData, key) => {
    const flag = typeof keys === "function" ? keys(key) : keys.includes(key);
    flag && (newData[key] = target[key]);
    return newData;
  }, {});
}

// 排除指定键
export function omit(target, keys) {
  if (!keys) return target;
  return Object.keys(target).reduce((newData, key) => {
    const flag = typeof keys === "function" ? keys(key) : keys.includes(key);
    !flag && (newData[key] = target[key]);
    return newData;
  }, {});
}

//深拷贝
export function merge(target, ...sources) {
  for (const source of sources) {
    for (const [key, value] of Object.entries(source)) {
      if (isObject(value)) {
        const targetValue = target[key];
        const newTarget = isObject(targetValue)
          ? targetValue
          : Array.isArray(value) ? [] : {};
        target[key] = merge(newTarget, value);
      } else {
        target[key] = value;
      }
    }
  }
  return target;
}

// 根据field字段，去重
export function uniSet(arr, field) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      let prev = field ? arr[i][field] : arr[i];
      let next = field ? arr[j][field] : arr[j];
      prev == next && arr.splice(j,1) && j--
    }
  }
  return arr;
}

export function equals(a, b, epsilon = 1e-10, memo = new WeakMap()) {
  if (typeof a !== typeof b) {
    return false;
  }
  if (a === b) {
    // 包括 undefined、null、数值、字符串、布尔等基本数据类型
    return true;
  }
  if (typeof a === 'number' && typeof b === 'number' &&
    !Number.isNaN(a) && !Number.isNaN(b)) {
    // 数值类型相等有两种可能：完全相等或近似相等
    return Math.abs(a - b) < epsilon;
  }
  if (a instanceof RegExp && b instanceof RegExp) {
    // 正则表达式可以使用 toString() 方法转为字符串后比较
    return a.toString() === b.toString();
  }
  if (a instanceof Date && b instanceof Date) {
    // 日期可以使用 getTime() 方法转为时间戳后比较
    return a.getTime() === b.getTime();
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    // 数组需要逐一比较元素
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!equals(a[i], b[i], epsilon, memo)) {
        return false;
      }
    }
    return true;
  }
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    // 对象需要逐一比较属性
    // 确保不会出现循环引用的情况
    if (memo.has(a) && memo.get(a) === b) {
      return true;
    }
    memo.set(a, b);
    let keysA = Object.keys(a).sort();
    let keysB = Object.keys(b).sort();
    if (!equals(keysA, keysB)) {
      return false;
    }
    // 这样比较会损失性能
    // for (let i = 0; i < keysA.length; i++) {
    //     let key = keysA[i];
    //     if (!equals(a[key], b[key], epsilon)) {
    //         return false;
    //     }
    // }
    // return true;
    return JSON.stringify(a) == JSON.stringify(b);
  }
  return false;
}


export function addClass(classNames, className) {
  classNames = (classNames || '').trim().split(/\s+/);
  return [...classNames, className].join(' ').replace(/^\s*|\s*$/g, '');
};