Əlbəttə, Peri! Sənə `useState`-lə bağlı müxtəlif səviyyələrdə suallar hazırlayıram — asandan mürəkkəbə doğru. Sonda isə cavabları verəcəm. Bu suallar həm anlayışını yoxlamaq, həm də peşəkar səviyyəyə yüksəlmək üçündür.

---

# useState Üzrə Sual Toplusu

### Sadə səviyyə

1. `useState` hook nə üçün istifadə olunur?
2. `useState` çağırışı hansı dəyəri qaytarır?
3. `useState`-də başlanğıc dəyər nə üçün verilir?
4. `setState` funksiyası nə edir?
5. `useState`-dən neçə dəfə istifadə etmək olar?
6. `useState`-in qaytardığı array-ın birinci və ikinci elementləri nədir?

---

### Orta səviyyə

7. React-də state dəyişəndə nə baş verir?
8. Niyə state-i birbaşa dəyişdirmək olmaz? (məsələn, `user.name = "New Name"` əvəzinə `setUser` istifadə edilməlidir)
9. `setState` funksiyasına birbaşa dəyər verməklə funksiya verməyin fərqi nədir?
10. `useState`-də obyekti və massivləri necə yeniləyirik? Misal yaz.
11. `useState`-in lazy initialization nədir və nə zaman istifadə olunur?
12. `setState`-ə funksiya verdikdə `prev` nədir və niyə istifadə olunur?

---

### Mürəkkəb səviyyə

13. `useState`-in asinxron olması nə deməkdir və bunun real tətbiqlərdə nəticələrinə necə təsir edir?
14. React-də `useState`-in batch update mexanizmi necə işləyir?
15. `useState`-in komponentin yenidən render olunması ilə əlaqəsi nədir?
16. `useState` ilə `useReducer` hook-u arasındakı fərq nədir və hansı hallarda hansını seçmək məsləhətdir?
17. `useState`-də kompleks obyektlər üçün performans optimizasiyası necə aparılır? (məsələn, `React.memo`, `useCallback` və `useMemo` ilə birlikdə istifadə)
18. `useState` ilə state dəyişikliklərinin sinxronizasiya problemlərini necə həll edirik?
19. Bir komponentdə çoxlu `useState` çağırışlarının idarə olunması necə optimallaşdırılır?
20. `useState` hook-u React fiber reconciler ilə necə işləyir?

---

# Cavablar

1. React komponentində vəziyyəti (state) yaratmaq və idarə etmək üçün istifadə olunur.
2. Array qaytarır: `[hazırkiState, onuDəyişməkÜçünFunksiya]`.
3. Komponentin state-in ilkin dəyərini təyin etmək üçün.
4. State-in dəyərini dəyişdirir və komponentin yenidən render olunmasına səbəb olur.
5. İstənilən sayda istifadə etmək olar, hər biri öz state-inə malik olur.
6. Birinci element hazırki state dəyəri, ikinci isə onu dəyişmək üçün funksiyadır.
7. Komponent yenidən render olunur və UI yenilənir.
8. React state-in dəyişməsini izləmək üçün `setState`-dən istifadə edir; birbaşa dəyişdirsək, React bunu aşkar edə bilmir və render yenilənmir.
9. Birbaşa dəyər verəndə əvvəlki state ilə əlaqə yoxdu, funksiya verəndə ən son state-ə əsaslanaraq yeniləmə aparılır.
10. Obyekti yeniləmək üçün `setUser(prev => ({...prev, yeniXüsusiyyət: dəyər}))` kimi yazılır.
11. Başlanğıc state-in hesablanması ağırdırsa və ya mürəkkəbdirsə, lazy initialization istifadə olunur. Bu halda başlanğıc dəyər funksiyadan qaytarılır və yalnız ilk renderdə çağırılır.
12. `prev` — hazırki, əvvəlki state dəyəridir, ən son state-i əldə etmək üçün lazımdır.
13. `setState` asinxrondur, yəni dərhal tətbiq olunmur, bu səbəbdən birdən çox çağırış olduqda köhnə dəyərlərlə işləmək təhlükəsi yaranır.
14. React birdən çox state dəyişməsini yığır (batching) və sonra bir dəfə render edir, bu performansı artırır.
15. `useState`-də state dəyişəndə komponent yenidən render olunur və yeni UI göstərilir.
16. `useReducer` daha mürəkkəb state idarəetməsi üçündür, `useState` daha sadə hallarda; `useReducer` action və reducer funksiyasını istifadə edir.
17. `React.memo`, `useCallback` və `useMemo`-dan istifadə edərək lazımsız renderləri və yenidən hesablamaları azalda bilərik.
18. `setState` funksiyasına funksiya verərək state dəyişikliklərini sinxronlaşdırırıq.
19. State-ləri qruplaşdırmaq, `useReducer` istifadə etmək və ya lazımsız renderləri `React.memo` ilə qarşısını almaqla optimallaşdırırıq.
20. React fiber reconciler `useState` hook-larını və onların dəyişikliklərini izləyir və effektiv render üçün planlayır.
