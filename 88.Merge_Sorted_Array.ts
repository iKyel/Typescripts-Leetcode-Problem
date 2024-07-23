function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1; // Con trỏ cuối cùng của mảng nums1
    let j = n - 1; // Con trỏ cuối cùng của mảng nums2
    let k = m + n - 1; // Con trỏ cuối cùng của mảng nums1 (bao gồm cả các phần tử 0)

    // So sánh từ cuối đến đầu
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // Nếu còn phần tử nào trong nums2, điền chúng vào nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

// Ví dụ sử dụng
const nums1 = [4, 5, 6, 0, 0, 0];
const m = 3;
const nums2 = [1, 2, 3];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // [1, 2, 3, 4, 5, 6]
