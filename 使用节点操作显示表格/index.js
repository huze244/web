  for (var i = 0; i < list.length - 1; i++) {

        // j < list.length - 1   最后一个值,没有必要和后面比 (优化!!)
        // j < list.length - 1 - i   a.  最后一个值,没有必要和后面比   b. 减去多余的比较次数
        for (var j = i+1; j < list.length ; j++) { // 遍历数组 => 对应下标
          // j 当前元素对应的下标 (当前值: list[j])
          // j+1 当前元素对应的后一个元素的下标 (后一个值: list[j + 1])
    
          if (list[j] < list[i]) { // 当前值和它的后一个值作比较
            var temp = list[j];  // 取当前值存中间变量 temp
            list[j] = list[i]; // 用后一个值覆盖数组当前位置对应的值
            list[i] = temp;  // 将中间变量的值 覆盖 数组后一个位置对应的值
          }
    
        }
        console.log(list);
      for (var i = 0; i < list.length - 1; i++) {
    
        // j < list.length - 1   最后一个值,没有必要和后面比 (优化!!)
        // j < list.length - 1 - i   a.  最后一个值,没有必要和后面比   b. 减去多余的比较次数
        for (var j = i+1; j < list.length ; j++) { // 遍历数组 => 对应下标
          // j 当前元素对应的下标 (当前值: list[j])
          // j+1 当前元素对应的后一个元素的下标 (后一个值: list[j + 1])
    
          if (list[j] < list[i]) { // 当前值和它的后一个值作比较
            var temp = list[j];  // 取当前值存中间变量 temp
            list[j] = list[i]; // 用后一个值覆盖数组当前位置对应的值
            list[i] = temp;  // 将中间变量的值 覆盖 数组后一个位置对应的值
          }
    
        }
        console.log(list);
    }
}