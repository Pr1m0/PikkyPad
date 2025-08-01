# PikkyPad

Oktató és szórakoztató célú fejlesztőjáték óvodáskorú gyerekeknek

A Pikkypad egy webalapú alkalmazás, amelynek célja az óvodáskorú gyermekek fejlesztése játékos formában. A játék segíti a kognitív képességek, reakcióidő és memóriakészség fejlődését, miközben biztonságos és élvezetes környezetet nyújt a tanuláshoz.

## Képernyőképek

**Főképernyő:**  
![Pikkypad kezdőképernyő](images/pikypad1.png)

**Gyermekek listája és kártyái:**  
![Gyermekek kezelése képernyő](images/pikkypad2.png)

**Játék képernyő (memóriajáték):**  
![Memóriajáték képernyő](images/pikkypad_3.png)

## Funkciók

- Egyszerű, színes, gyerekbarát felhasználói felület
- Interaktív játékok és feladatok
- Adminisztrációs felület a tartalom kezeléséhez
- Fejlesztés alatt: Statisztikák a fejlődés követéséhez
- Fejlesztés alatt: Szülői és pedagógusi visszajelzés lehetősége

## Technológiák

- Frontend: Angular 18
- Backend: Laravel 11
- Kommunikáció: REST API
- Jogosultságkezelés: Role-based access control (pl. admin jogosultság)

## Verziók

- Composer: 2.8.3
- PHP: 8.2.27
- Node.js: 18.20.6

## Telepítés

**1. Laravel oldalon:**

- composer install
- .env beállítása
- php artisan migrate
- php artisan db:seed /Adminisztrátorok létrehozása, Test user és játékok aktiválása
- php artisan serve

**2. Angular oldalon:**

- npm install
- ng serve
