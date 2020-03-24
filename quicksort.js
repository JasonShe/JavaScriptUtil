// 快速排序
// 思想：数组中指定一个元素作为标尺，比它大的放到该元素后面，比它小的放到该元素前面，如此重复直至全部正序排列。
// 选基准：在数据结构中选择一个元素作为基准(pivot)
// 划分区：参照基准元素值的大小，划分无序区，所有小于基准元素的数据放入一个区间，所有大于基准元素的数据放入另一区间。
// 分区操作结束后，基准元素所处的位置就是最终排序后它应该所处的位置
// 递归：对初次划分出来的两个无序区间，递归调用第 1步和第 2步的算法，直到所有无序区间都只剩下一个元素为止。

// 递归法快速排序
function quickSortWithRecursive(arr) {
  if (arr.length <= 1) return arr

  // 取数组最接近中间的数位基准，也可以选取第一个，或者最后一个数为基准
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]

  //左右区间，用于存放排序后的数
  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    //小于基准，放于左区间，大于基准，放于右区间
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSortWithRecursive(left).concat(
    [pivot],
    quickSortWithRecursive(right)
  )
}
console.time('test1')
var arr = [14, 3, 15, 7, 2, 76, 11]
console.log(quickSortWithRecursive(arr))
console.timeEnd("test1");

/**
 * 快速排序
 * @param { Arrya } array
 */
function quickSort(array, left = 0, right = array.length - 1) {
  if (left > right) return
  let storeIndex = partition(array, left, right)
  quickSort(array, left, storeIndex - 1)
  quickSort(array, storeIndex + 1, right)

  function partition(array, left, right) {
    let storeIndex = left, provide = array[right]
    for (let i = left; i < right; i++) {
      if (array[i] < provide) {
        swap(array, storeIndex, i)
        storeIndex++
      }
    }
    swap(array, storeIndex, right)
    return storeIndex
  }

  // 交换元素方法
  function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }

  return array
}

console.time('test2')
var arr2 = [14, 3, 15, 7, 2, 76, 11]
console.log(quickSort(arr2))
console.timeEnd("test2");

// test1: 4.198ms
// test2: 0.794ms
