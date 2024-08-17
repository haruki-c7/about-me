document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");

    // 3秒後に背景をフェードアウト（文字のフェードイン・アウトが終わった後）
    setTimeout(function() {
        loader.classList.add("hidden");
    }, 2700); // 2.7秒だぞ
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const notification = document.createElement('div');
    notification.className = 'notification'; // クラス名を追加
    form.appendChild(notification);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // デフォルトの送信処理をキャンセル
        notification.textContent = '　このフォームは自己紹介サイトのため送信することはできません :(';
        notification.style.display = 'block'; // 課題を忘れていたので４日間で作りました。
    });//もう少しこだわれたらよかったが、免許を取らないといけないのでこれで提出します。
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.profile-section');
    let currentIndex = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.remove('outgoing');
                section.classList.add('incoming');
                section.style.display = 'block';
            } else {
                section.classList.remove('incoming');
                section.classList.add('outgoing');
                section.style.display = 'none';
            }
        });
    }

    function nextSection() {
        const nextIndex = (currentIndex + 1) % sections.length;
        showSection(nextIndex);
        currentIndex = nextIndex;
    }

    showSection(currentIndex);
    setInterval(nextSection, 5000); // 5秒ごとに切り替え
});

document.addEventListener('DOMContentLoaded', function() {
    // フォームと通知要素を取得
    const contactForm = document.getElementById('contactForm');
    const notification = document.getElementById('notification');

    // クリックカウンターの初期化
    let clickCount = 0;

    // 送信ボタンのクリックイベントリスナーを追加
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // デフォルトのフォーム送信を防止

        clickCount++; // クリックカウントを増加

        if (clickCount === 5) {
            //リダイレクト
            window.location.href = 'hide.html';
        } else {
            // それ以外の場合のエラーメッセージの表示
            notification.textContent = '送信できません！';
        }
    });
});
