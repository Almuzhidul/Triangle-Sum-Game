const numbers = [1, 2, 3, 4, 5, 6];
let circles = [];
const container = document.querySelector('.triangle-container');
let currentNumberIndex = 0;

// Buat 6 lingkaran secara dinamis
for (let i = 0; i < 6; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.textContent = ' '; // Mulai dengan kosong
    circle.addEventListener('click', () => {
        // Ganti angka di lingkaran
        circle.textContent = numbers[currentNumberIndex];
        currentNumberIndex = (currentNumberIndex + 1) % numbers.length;
    });
    container.appendChild(circle);
    circles.push(circle);
}

function checkSum() {
    const values = circles.map(circle => parseInt(circle.textContent));
    
    // Periksa apakah semua lingkaran sudah terisi
    if (values.includes(NaN)) {
        document.getElementById('result').textContent = "Mohon isi semua lingkaran!";
        return;
    }

    // Hitung jumlah setiap sisi berdasarkan tata letak baru
    // Urutan values[]:
    // 0: Sudut atas
    // 1: Tengah sisi kiri
    // 2: Tengah sisi kanan
    // 3: Sudut kiri bawah
    // 4: Sudut kanan bawah
    // 5: Tengah sisi bawah

    const side1 = values[0] + values[1] + values[3]; // Sisi kiri: Atas, tengah-kiri, kiri-bawah
    const side2 = values[0] + values[2] + values[4]; // Sisi kanan: Atas, tengah-kanan, kanan-bawah
    const side3 = values[3] + values[5] + values[4]; // Sisi bawah: Kiri-bawah, tengah-bawah, kanan-bawah

    const resultDiv = document.getElementById('result');

    if (side1 === side2 && side2 === side3) {
        resultDiv.textContent = `Selamat! Jumlah setiap sisi adalah ${side1}. 🎉`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `Jawaban salah. Coba lagi!`;
        resultDiv.style.color = 'red';
    }
}
