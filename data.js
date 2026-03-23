const EXAM_DATABASE = {
    // ĐỀ SỐ 1: TIẾNG ANH SÓC SƠN
    "eng-soc-son-108": {
        title: "Kỳ Thi Thử vào lớp 10 Trường THPT (2026)",
        subtitle: "THPT Sóc Sơn • Lần 1 • Môn: Tiếng Anh • Mã đề: 108",
        subject: "Tiếng Anh",
        timeMinutes: 60,
        questions: [
            {
                groupHtml: `
                    <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-4 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <h3 class="font-bold text-indigo-900 mb-3 text-[15px]"><i class="fa-solid fa-book-open text-indigo-500 mr-2"></i>Mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the following questions from 1 to 2.</h3>
                        <p class="text-slate-700 leading-relaxed mb-2 font-medium bg-white/60 p-4 rounded-xl border border-indigo-50 text-justify">
                            (1) _________. After a landslide, rumors can travel quickly and make people choose unsafe roads. Local officials usually share updates through radio, posters, and community groups. (2) _________. A calm, verified message often saves more time than a fast guess.
                        </p>
                    </div>
                `,
                id: 1, text: "Question 1. Choose the TOPIC SENTENCE that can BEGIN the text most appropriately.",
                options: [
                    "A. Disasters are terrible, so people should stop spreading false information",
                    "B. Heavy rain often causes serious damage to roads and bridges",
                    "C. In any natural disaster, reliable information is as important as clean water",
                    "D. Planting more trees is the best way to prevent landslides in mountainous areas"
                ], correct: 2,
                explanation: "Đoạn văn nói về việc tin đồn lan truyền nhanh và thông điệp được xác minh giúp tiết kiệm thời gian. Do đó, đáp án C nói về tầm quan trọng của thông tin đáng tin cậy là câu chủ đề phù hợp nhất."
            },
            {
                id: 2, text: "Question 2. Put the sentences (a-c) in the correct order, and then fill in the blank to make a logical text.<br><span class='text-sm text-slate-500 font-normal mt-2 block p-3 bg-slate-50 rounded-lg border border-slate-100'>a. Before you share a warning online, check the source and the date carefully.<br>b. If you feel unsure, ask a teacher, neighbor, or local officer for guidance.<br>c. Saving emergency numbers in your phone helps you confirm news quickly.</span>",
                options: ["A. b - a - c", "B. c - a - b", "C. a - c - b", "D. c - b - a"], correct: 1,
                explanation: "Trình tự hợp lý nhất: (c) Lưu số khẩn cấp giúp xác nhận tin tức nhanh chóng -> (a) Trước khi chia sẻ cảnh báo trực tuyến, hãy kiểm tra kỹ nguồn và ngày tháng -> (b) Nếu không chắc chắn, hãy hỏi người có chuyên môn. Vậy thứ tự đúng là c - a - b."
            },
            
            {
                groupHtml: `
                    <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <h3 class="font-bold text-indigo-900 mb-3 text-[15px]"><i class="fa-solid fa-pen-to-square text-indigo-500 mr-2"></i>Mark the letter A, B, C, or D on your answer sheet to indicate the correct option that best fits each of the numbered blanks from 3 to 8.</h3>
                        <p class="text-slate-700 leading-relaxed font-medium bg-white/60 p-4 rounded-xl border border-indigo-50 text-justify">
                            Many teenagers use short-video apps after school to relax. The clips are funny, and the algorithm quickly learns what you like. However, for many students, this (3) _________ a healthy choice because each video leads to another one. Some teens also compare their lives with perfect posts, so they feel worse about themselves. (4) _________ also distract students from their study, especially chat apps. When students try to study with their phones nearby, notifications, (5) _________ them lose focus, keep popping up. They open one message or answer a friend, and suddenly twenty minutes are gone. This can lower their grades and make them tired. (6) _________, a few simple rules can protect their time. For example, they can leave the phone in another room, turn off alerts, and (7) _________ a short break every 30 minutes. To stay productive, they should set small goals such as "reading two pages" or "solving five problems". After homework, social media is fine, but it is smart to prioritize sleep and real conversations. Parents do not need to ban apps; they (8) _________ talk with teens about balance and consequences, and listen without judging.
                        </p>
                    </div>
                `,
                id: 3, text: "Question 3.", options: ["A. rarely is", "B. rarely isn't", "C. is rarely", "D. isn't rarely"], correct: 2,
                explanation: "Trạng từ chỉ tần suất \"rarely\" (hiếm khi) phải đứng sau động từ to be \"is\". Nghĩa của câu: \"điều này hiếm khi là một lựa chọn lành mạnh\"."
            },
            { id: 4, text: "Question 4.", options: ["A. Any other apps", "B. Another app", "C. Many other apps", "D. The other apps"], correct: 2,
                explanation: "Phía sau khoảng trống là động từ số nhiều \"distract\" nên cần chủ ngữ số nhiều. Dịch nghĩa: \"Nhiều ứng dụng khác cũng làm học sinh xao nhãng\"."
            },
            { id: 5, text: "Question 5.", options: ["A. on which make", "B. that can make", "C. which can make", "D. that makes on"], correct: 2,
                explanation: "Đây là mệnh đề quan hệ không xác định (có dấu phẩy) nên không được dùng \"that\", phải dùng \"which\". \"notifications\" là số nhiều nên động từ \"make\" giữ nguyên."
            },
            { id: 6, text: "Question 6.", options: ["A. Therefore", "B. Meanwhile", "C. In contrast", "D. Moreover"], correct: 2,
                explanation: "Đoạn trước đang nói về tác hại, đoạn này đưa ra giải pháp bảo vệ thời gian. Cần dùng \"In contrast\" (Ngược lại) để tạo sự tương phản về mặt ý nghĩa."
            },
            { id: 7, text: "Question 7.", options: ["A. do", "B. take", "C. make", "D. give"], correct: 1,
                explanation: "Ta có cụm từ cố định (collocation) thường đi kèm với nhau: \"take a break\" (nghỉ ngơi, giải lao)."
            },
            { id: 8, text: "Question 8.", options: ["A. may", "B. can", "C. should", "D. might"], correct: 2,
                explanation: "Dùng động từ khuyết thiếu \"should\" (nên) để đưa ra lời khuyên hợp lý: \"cha mẹ NÊN nói chuyện với thanh thiếu niên về sự cân bằng\"."
            },
            
            {
                groupHtml: `<div class="mt-10 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-circle-check text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D to indicate the correct answer (9-16)</h3></div>`,
                id: 9, text: "Question 9. The problem of _________ among young people is hard to solve.", options: ["A. employers", "B. unemployed", "C. unemploying", "D. unemployment"], correct: 3,
                explanation: "Sau giới từ \"of\" cần danh từ. \"unemployment\" (sự thất nghiệp) phù hợp nhất về nghĩa: \"Vấn đề thất nghiệp trong giới trẻ...\"."
            },
            { id: 10, text: "Question 10. If Alex _________ up the word in the dictionary, he _________ its meaning.", options: ["A. looks / won't know", "B. looks / will know", "C. looks / would know", "D. looked / will know"], correct: 1,
                explanation: "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở hiện tại hoặc tương lai. Cấu trúc: If + S + V(s/es), S + will + V(nguyên thể)."
            },
            { id: 11, text: "Question 11. There _________ a beautiful park near the river for decades, and it _________ many visitors every weekend.", options: ["A. was / attracted", "B. has been / attracts", "C. have been / attracts", "D. is / attracted"], correct: 1,
                explanation: "Vế đầu có \"for decades\" (trong nhiều thập kỷ) -> dùng thì Hiện tại hoàn thành (has been). Vế sau có \"every weekend\" -> dùng thì Hiện tại đơn diễn tả sự thật/thói quen (attracts)."
            },
            { id: 12, text: "Question 12. For our science project, we had to _________ a simple idea to save electricity at home.", options: ["A. go over", "B. pick up", "C. put up with", "D. come up with"], correct: 3,
                explanation: "Cụm động từ (Phrasal verb) \"come up with\" mang nghĩa là nảy ra, nghĩ ra (một ý tưởng). Các từ khác không hợp nghĩa: go over (kiểm tra), pick up (nhặt, đón), put up với (chịu đựng)."
            },
            { id: 13, text: "Question 13. He runs _________ we expected. Therefore, he won the race.", options: ["A. more fastly than", "B. more fast than", "C. faster than", "D. as fastly as"], correct: 2,
                explanation: "Từ \"fast\" vừa là tính từ vừa là trạng từ (không có từ \"fastly\"). Dạng so sánh hơn của trạng từ ngắn \"fast\" là \"faster than\"."
            },
            { id: 14, text: "Question 14. Jane asks for permission to open the door and Bob responds.<br><span class='block mt-2 text-indigo-900 bg-indigo-50/50 p-2 rounded-lg'>Jane: \"Excuse me, do you mind if I open the door? It's a bit stuffy here.\"<br>Bob: \"_________\"</span>", options: ["A. Not at all. Go ahead.", "B. Sure, you can't open it.", "C. No, I want you not to open it.", "D. Never mind. That would be great!"], correct: 0,
                explanation: "Để đáp lại câu hỏi xin phép \"Do you mind if...\" (Bạn có phiền không nếu...), nếu đồng ý cho phép ta dùng \"Not at all. Go ahead.\" (Không phiền đâu. Bạn cứ tự nhiên)."
            },
            { id: 15, text: "Question 15. _________ rich benefit the most from advanced technology, while _________ poor often struggle to access it.", options: ["A. The/ a", "B. A/ the", "C. A/ a", "D. The/ the"], correct: 3,
                explanation: "Cấu trúc \"The + Tính từ\" dùng để chỉ một nhóm người trong xã hội. \"The rich\" = Người giàu, \"The poor\" = Người nghèo."
            },
            { id: 16, text: "Question 16. Jane _________ be an avid tennis player, but her busy schedule prevents regular practice.", options: ["A. wasn't used to", "B. isn't used to", "C. didn't use to", "D. used to"], correct: 3,
                explanation: "Cấu trúc \"used to + V\" diễn tả một thói quen hoặc trạng thái từng có trong quá khứ nhưng nay không còn (Jane từng là một người chơi tennis đam mê...)."
            },

            {
                groupHtml: `<div class="mt-10 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-arrows-turn-to-dots text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D to indicate the sentence that is closest in meaning (17-18)</h3></div>`,
                id: 17, text: "Question 17. She asked me where I had bought my dress 2 days before.", options: [
                    "A. She said: \"Where do you buy your dress 2 days later?\"",
                    "B. She said: \"Where have you bought your dress 2 days before?\"",
                    "C. She asked: \"Where did you buy your dress 2 days ago?\"",
                    "D. She asked: \"Where had you bought my dress 2 days ago?\""
                ], correct: 2,
                explanation: "Khi chuyển từ câu trực tiếp sang câu gián tiếp: Thì Quá khứ đơn (did buy) sẽ lùi thành Quá khứ hoàn thành (had bought), và trạng từ \"2 days ago\" đổi thành \"2 days before\". Câu C là câu trực tiếp chính xác nhất."
            },
            {
                id: 18, text: "Question 18. I think we should raise money to restore our aging man-made wonders.", options: [
                    "A. I suggest raising money to restore our aging man-made wonders.",
                    "B. I suggest we could raise money to restore our aging man-made wonders.",
                    "C. I suggest to raise money to restore our aging man-made wonders.",
                    "D. I suggested that we should raise money to restore our aging man-made wonders."
                ], correct: 0,
                explanation: "Cấu trúc đưa ra lời khuyên \"I think we should + V\" tương đương với cấu trúc đề nghị \"I suggest + V-ing\"."
            },

            {
                groupHtml: `<div class="mt-10 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-layer-group text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D to indicate the sentence that is best made from the given cues (19-20)</h3></div>`,
                id: 19, text: "Question 19. The dishes / my aunt / cook / party / last week / be / delicious.", options: [
                    "A. The dishes which my aunt cooked for the party last week was delicious.",
                    "B. The dishes that my aunt was cooking for the party last week were delicious.",
                    "C. The dishes which my aunt cooks for the party last week are delicious.",
                    "D. The dishes that my aunt cooked for the party last week were delicious."
                ], correct: 3,
                explanation: "Mệnh đề quan hệ xác định có thể dùng \"that\" hoặc \"which\". Sự việc xảy ra ở quá khứ (last week) nên dùng \"cooked\" và động từ to be phải là \"were\" (số nhiều chia theo chủ ngữ The dishes)."
            },
            {
                id: 20, text: "Question 20. Sometimes / my sister/ I/ wish/ parents/ put/ themselves/ shoes.", options: [
                    "A. Sometimes my sister and I wish our parents can put themselves in their shoes.",
                    "B. Sometimes my sister and I wish our parents could put themselves in our shoes.",
                    "C. Sometimes my sister and I wish my parents would put themselves on our shoes.",
                    "D. Sometimes my sister or I wish our parents put themselves in their shoes."
                ], correct: 1,
                explanation: "Câu điều ước ở hiện tại/tương lai: S + wish + S + V(quá khứ đơn/could + V). Cụm thành ngữ \"put oneself in someone's shoes\" nghĩa là đặt mình vào vị trí của ai đó."
            },

            {
                groupHtml: `
                    <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-glasses text-indigo-500 mr-2"></i>Read the following passage and mark the letter A, B, C or D to indicate the correct answer (21-26)</h3>
                        <div class="bg-white/70 p-5 rounded-xl border border-indigo-50">
                            <p class="text-slate-700 leading-relaxed mb-3 indent-6 text-justify">
                                Water puppetry is a unique Vietnamese art form that began in the rice fields of the Red River Delta over a thousand years ago. Farmers created this special type of theater to entertain their communities during festivals and celebrations. The puppets dance on water while hidden performers control them from behind a screen. However, this beautiful tradition is now facing serious challenges.
                            </p>
                            <p class="text-slate-700 leading-relaxed mb-3 indent-6 text-justify">
                                In the past, almost every village in northern Vietnam had its own water puppet troupe. Young people learned the art from their parents and grandparents. Performances were common during harvest festivals, Lunar New Year, and other important occasions. The shows told stories about daily life, history, and folk tales that everyone knew and loved. This tradition helped <b class="text-indigo-700">preserve</b> the cultural identity of Vietnamese villages and brought communities together.
                            </p>
                            <p class="text-slate-700 leading-relaxed mb-3 indent-6 text-justify">
                                Today, fewer young people want to learn water puppetry. Many leave their villages to find jobs in cities, where they can earn more money. The training is long and difficult, and performances don't pay well. Modern entertainment like movies, video games, and social media are more attractive to the youth. As older puppet masters pass away, their knowledge and skills disappear with them. The art form that once <b class="text-indigo-700">flourished</b> in hundreds of villages now survives in only a few places, mainly in tourist shows in Hanoi.
                            </p>
                            <p class="text-slate-700 leading-relaxed indent-6 text-justify">
                                Cultural experts are working hard to save this tradition. They organize training programs and try to make performances more interesting for young audiences. Some believe that if water puppetry can adapt to modern times while keeping its traditional spirit, it can survive for future generations.
                            </p>
                        </div>
                    </div>
                `,
                id: 21, text: "Question 21. What is the main idea of the passage?", options: [
                    "A. Water puppetry once united villages but now declines as fewer young people learn it.",
                    "B. Fewer young people learn Vietnamese water puppetry, but experts are trying to preserve it.",
                    "C. Water puppetry is an ancient Vietnamese tradition that needs modern adaptation to survive.",
                    "D. Ancient Vietnamese water puppetry helps to preserve culture but now faces serious challenges."
                ], correct: 3,
                explanation: "Đoạn văn chủ yếu giới thiệu về múa rối nước (một truyền thống cổ xưa giúp bảo tồn văn hóa) nhưng hiện tại đang phải đối mặt với nhiều thách thức nghiêm trọng (được nêu chi tiết ở các đoạn sau)."
            },
            { id: 22, text: "Question 22. The word \"preserve\" in paragraph 2 is OPPOSITE meaning to ______.", options: ["A. change", "B. forget", "C. protect", "D. destroy"], correct: 3,
                explanation: "Từ \"preserve\" (bảo tồn, gìn giữ) có nghĩa TRÁI NGƯỢC với \"destroy\" (phá hủy)."
            },
            { id: 23, text: "Question 23. Which of the following is NOT mentioned as a reason why fewer young people learn water puppetry today?", options: ["A. Older puppet masters pass away.", "B. Learners have to experience long and difficult training.", "C. Modern entertainment is more attractive to them.", "D. They move to cities to earn more money."], correct: 0,
                explanation: "Đoạn 3 nêu lý do người trẻ không muốn học là: lên thành phố kiếm tiền (D), đào tạo khó và lâu (B), giải trí hiện đại hấp dẫn hơn (C). Việc \"nghệ nhân già qua đời\" (A) là một thực trạng làm mất đi kỹ năng, không phải là nguyên nhân khiến người trẻ từ chối học."
            },
            { id: 24, text: "Question 24. The word \"flourished\" in paragraph 3 is CLOSEST in meaning to ______.", options: ["A. grew strongly", "B. started early", "C. developed slowly", "D. moved quickly"], correct: 0,
                explanation: "Từ \"flourished\" (phát triển rực rỡ, hưng thịnh) GẦN NGHĨA NHẤT với cụm \"grew strongly\" (phát triển mạnh mẽ)."
            },
            { id: 25, text: "Question 25. Which of the following is TRUE about water puppetry in Vietnam at present?", options: ["A. It attracts more young performers now than in the past decades.", "B. It is mainly kept alive through tourism rather than traditional village practices.", "C. It has completely disappeared from all Vietnamese villages except Hanoi.", "D. It has successfully adapted to modern entertainment without losing its traditions."], correct: 1,
                explanation: "Dựa vào câu cuối đoạn 3: \"now survives in only a few places, mainly in tourist shows in Hanoi\" (hiện nay chủ yếu tồn tại ở một vài nơi, chủ yếu là các buổi diễn du lịch tại Hà Nội)."
            },
            { id: 26, text: "Question 26. Which statement best reflects the passage's view about saving water puppetry for the future?", options: ["A. It will survive naturally because it has existed for over a thousand years.", "B. It should stay exactly the same, even if fewer people watch it.", "C. It needs to adapt to modern times while keeping its traditional spirit.", "D. It can only be saved if young people stop using social media and games."], correct: 2,
                explanation: "Dựa vào câu cuối đoạn 4: \"if water puppetry can adapt to modern times while keeping its traditional spirit, it can survive for future generations\" (cần thích ứng với thời hiện đại trong khi vẫn giữ tinh thần truyền thống)."
            },

            // CÂU DRAG AND DROP
            {
                groupHtml: `
                    <div class="bg-indigo-50/50 p-6 sm:p-8 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden" id="q-block-27">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <div class="flex justify-between items-start mb-6 border-b border-indigo-100 pb-4">
                            <h3 class="font-bold text-indigo-900 text-base sm:text-lg leading-tight"><i class="fa-solid fa-hand-pointer text-indigo-500 mr-2"></i>Kéo thả hoặc chạm để chọn đáp án điền vào đoạn văn (Câu 27-30).</h3>
                            <span class="bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm shrink-0 mt-0.5">Drag & Drop</span>
                        </div>
                        
                        <div class="bg-white p-5 sm:p-6 rounded-xl border border-indigo-50 text-slate-700 leading-loose text-justify text-[15px] sm:text-base shadow-sm mb-6">
                            Traditional tourism can damage the environment in many ways. 
                            <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors" id="drop-zone-27" data-qid="27" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 27)" onclick="handleZoneClick(27)">
                                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(27) Kéo vào đây</span>
                            </span>
                            , like pollution, too much garbage, and depleted natural resources. Hotels and restaurants use large amounts of electricity and produce waste. When too many visitors come to one place, they can destroy forests, beaches, and wildlife habitats. Local people may also lose their traditional way of life.<br><br>
                            
                            <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors" id="drop-zone-28" data-qid="28" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 28)" onclick="handleZoneClick(28)">
                                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(28) Kéo vào đây</span>
                            </span>
                            . Green tourism, also called sustainable tourism, is a way of traveling that protects the environment and helps local communities. Eco-friendly hotels use solar power and save water. 
                            <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors" id="drop-zone-29" data-qid="29" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 29)" onclick="handleZoneClick(29)">
                                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(29) Kéo vào đây</span>
                            </span>
                            , like bird watching or hiking on marked trails. Buying products from local sellers helps families earn money and keeps traditional crafts alive. 
                            <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors" id="drop-zone-30" data-qid="30" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 30)" onclick="handleZoneClick(30)">
                                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(30) Kéo vào đây</span>
                            </span>
                            , such as planting trees or cleaning beaches during their vacation.<br><br>
                            Everyone can practice green tourism. When we travel responsibly, we help preserve beautiful places for future generations to enjoy.
                        </div>

                        <div class="bg-indigo-50/60 p-5 rounded-xl border border-indigo-100">
                            <p class="mb-3 text-indigo-800 font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                                <i class="fa-solid fa-layer-group"></i> Kho câu trả lời (Click hoặc Kéo thả)
                            </p>
                            <div class="dnd-pool grid grid-cols-1 sm:grid-cols-2 gap-3 min-h-[100px]" id="dnd-pool" ondragover="handleDragOver(event)" ondrop="handlePoolDrop(event)" onclick="handlePoolClick(event)">
                                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-0" data-idx="0">
                                    <span class="short-text hidden"><i class="fa-solid fa-check mr-1"></i>Đáp án A</span>
                                    <span class="full-text flex items-start"><i class="fa-solid fa-grip-vertical text-slate-300 mr-2 mt-0.5"></i><span class="text-sm font-medium text-slate-700 leading-tight"><b class="text-indigo-600 mr-1">A.</b>Some travelers even participate in conservation projects</span></span>
                                </div>
                                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-1" data-idx="1">
                                    <span class="short-text hidden"><i class="fa-solid fa-check mr-1"></i>Đáp án B</span>
                                    <span class="full-text flex items-start"><i class="fa-solid fa-grip-vertical text-slate-300 mr-2 mt-0.5"></i><span class="text-sm font-medium text-slate-700 leading-tight"><b class="text-indigo-600 mr-1">B.</b>Tourists can choose activities that don't harm animals or plants</span></span>
                                </div>
                                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-2" data-idx="2">
                                    <span class="short-text hidden"><i class="fa-solid fa-check mr-1"></i>Đáp án C</span>
                                    <span class="full-text flex items-start"><i class="fa-solid fa-grip-vertical text-slate-300 mr-2 mt-0.5"></i><span class="text-sm font-medium text-slate-700 leading-tight"><b class="text-indigo-600 mr-1">C.</b>Popular tourist destinations often face problems</span></span>
                                </div>
                                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-3" data-idx="3">
                                    <span class="short-text hidden"><i class="fa-solid fa-check mr-1"></i>Đáp án D</span>
                                    <span class="full-text flex items-start"><i class="fa-solid fa-grip-vertical text-slate-300 mr-2 mt-0.5"></i><span class="text-sm font-medium text-slate-700 leading-tight"><b class="text-indigo-600 mr-1">D.</b>Green tourism offers better solutions</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                id: 27, isHidden: true, correct: 2,
                explanation: "Chỗ trống cần một mệnh đề khái quát trước khi liệt kê các vấn đề cụ thể (like pollution, garbage...). \"Các điểm du lịch nổi tiếng thường đối mặt với các vấn đề\" là hợp lý nhất."
            },
            { id: 28, isHidden: true, correct: 3,
                explanation: "Câu trước nêu tác hại của du lịch truyền thống, câu này đóng vai trò chuyển ý sang giải pháp tốt hơn là du lịch xanh (Green tourism). Đáp án D rất phù hợp."
            },
            { id: 29, isHidden: true, correct: 1,
                explanation: "Chỗ trống cần một câu nói về các hoạt động du lịch an toàn, vì phía sau tác giả lấy ví dụ \"like bird watching or hiking...\" (như ngắm chim hoặc leo núi). Đáp án B khớp hoàn toàn."
            },
            { id: 30, isHidden: true, correct: 0,
                explanation: "Phía sau có ví dụ \"such as planting trees or cleaning beaches\" (như trồng cây hay dọn bãi biển), đây là các hành động thuộc về \"dự án bảo tồn\" (conservation projects) được nhắc đến ở đáp án A."
            },

            {
                groupHtml: `<div class="mt-10 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-signs-post text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Read the following notices/messages and mark the correct answer (31-32)</h3></div>`,
                id: 31, 
                text: `Question 31. What does the sign mean?
                    <div class="sign-box font-bold flex flex-col items-center mx-auto my-4 transform rotate-1 hover:rotate-0 transition-transform">
                        <div class="bg-black text-white w-full py-1 text-lg tracking-widest">WARNING</div>
                        <div class="flex items-center gap-3 my-3">
                            <i class="fa-solid fa-dog text-4xl text-rose-600"></i>
                            <div class="text-sm leading-tight text-left">BEWARE<br>OF<br>DOG</div>
                        </div>
                        <div class="bg-black text-white w-full py-1 text-sm">NO TRESPASSING</div>
                    </div>`, 
                options: [
                    "A. You mustn't pass the area or you'll be attacked by a dog.",
                    "B. You are not allowed to bring your dog into this area. You need a permit.",
                    "C. You can't take pictures with a dog here. You need a permit.",
                    "D. Run away or a dog will pass the area and attack you."
                ], correct: 0,
                explanation: "Biển báo ghi \"BEWARE OF DOG\" (Coi chừng chó dữ) và \"NO TRESPASSING\" (Cấm xâm nhập), nghĩa là bạn không được phép đi qua khu vực này nếu không muốn bị chó tấn công."
            },
            { 
                id: 32, 
                text: `Question 32. What does the notice say?
                    <div class="sign-box bg-slate-100 flex flex-col justify-center shadow-inner mx-auto my-4 transform -rotate-1 hover:rotate-0 transition-transform border-slate-300">
                        <div class="font-bold text-lg mb-1 text-slate-800">SPORTS CLUB</div>
                        <div class="font-bold text-sm mb-2 text-rose-600">NOTICE</div>
                        <div class="text-xs italic text-slate-600">Closed for Maintenance<br>Monday to Wednesday</div>
                    </div>`, 
                options: [
                    "A. The club will remain closed for maintenance on Tuesday.",
                    "B. People can use the club any day except for the weekend.",
                    "C. The sports club is open on Thursday for maintenance.",
                    "D. The club opens earlier than usual from Thursday mornings."
                ], correct: 0,
                explanation: "Biển báo thông báo \"Closed for Maintenance Monday to Wednesday\" (Đóng cửa bảo trì từ thứ Hai đến thứ Tư), do đó câu A (sẽ đóng cửa vào thứ Ba) là phản ánh đúng nhất thông tin."
            },

            {
                groupHtml: `<div class="mt-10 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-volume-high text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress (33-34)</h3></div>`,
                id: 33, text: "Question 33.", options: ["A. candidate", "B. reference", "C. requirement", "D. paradise"], correct: 2,
                explanation: "Các từ \"candidate\", \"reference\", \"paradise\" có trọng âm rơi vào âm tiết thứ nhất. Từ \"requirement\" có trọng âm rơi vào âm tiết thứ hai."
            },
            { id: 34, text: "Question 34.", options: ["A. preserve", "B. balance", "C. suburb", "D. schedule"], correct: 0,
                explanation: "Từ \"preserve\" có trọng âm rơi vào âm tiết thứ 2. Các từ còn lại \"balance\", \"suburb\", \"schedule\" đều nhấn trọng âm ở âm tiết 1."
            },

            {
                groupHtml: `
                    <div class="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                        <h3 class="font-bold text-emerald-900 mb-4 text-[15px]"><i class="fa-solid fa-bullhorn text-emerald-500 mr-2"></i>Read the following announcement and mark the letter to indicate the correct option (35-38)</h3>
                        
                        <div class="bg-white/80 p-6 rounded-xl border border-emerald-100 shadow-sm">
                            <div class="text-center mb-5 pb-4 border-b border-emerald-100">
                                <h4 class="font-black text-emerald-700 text-xl tracking-wide"><i class="fa-solid fa-leaf"></i> GREEN TEENS <i class="fa-solid fa-leaf"></i></h4>
                                <p class="text-sm font-bold text-emerald-600 uppercase tracking-widest mt-1">Weekly Environment Update</p>
                            </div>
                            <p class="text-slate-700 leading-relaxed mb-4">
                                Our school's "Green Earth" club is calling for all students to take action to protect our surroundings. Small changes in our daily routines can lead to a huge impact <b class="text-emerald-700">(35) _________</b> the planet. Here are some simple ways you can help:
                            </p>
                            <ul class="list-none space-y-3 text-slate-700 mb-5 pl-2">
                                <li class="flex gap-3"><i class="fa-solid fa-check text-emerald-500 mt-1"></i> <span>First, try to reduce your <b class="text-emerald-700">(36) _________</b> by walking or cycling to school instead of asking for a motorbike ride.</span></li>
                                <li class="flex gap-3"><i class="fa-solid fa-check text-emerald-500 mt-1"></i> <span>Second, remember that <b class="text-emerald-700">(37) _________</b> student should bring their own reusable water bottle to reduce plastic waste in the canteen.</span></li>
                                <li class="flex gap-3"><i class="fa-solid fa-check text-emerald-500 mt-1"></i> <span>Third, participate in our "Clean Campus" day. We need community <b class="text-emerald-700">(38) _________</b> to pick up litter around the school yard and plant flowers in the garden.</span></li>
                            </ul>
                            <div class="bg-emerald-100/50 p-3 rounded-lg text-center">
                                <p class="text-emerald-800 font-bold text-sm"><i class="fa-regular fa-clock mr-1"></i> The event will start at 7:30 AM this Saturday.</p>
                                <p class="text-emerald-600 text-xs mt-1">Let's join hands to keep our school clean, green, and beautiful!</p>
                            </div>
                        </div>
                    </div>
                `,
                id: 35, text: "Question 35.", options: ["A. with", "B. on", "C. in", "D. at"], correct: 1,
                explanation: "Cụm từ cố định: \"have an impact on something\" (có tác động lên cái gì)."
            },
            { id: 36, text: "Question 36.", options: ["A. routine", "B. regulation", "C. lifestyle", "D. carbon footprint"], correct: 3,
                explanation: "Việc đi bộ hoặc đạp xe giúp giảm lượng khí thải carbon. \"carbon footprint\" (dấu chân carbon) là lựa chọn chính xác nhất về mặt ngữ nghĩa."
            },
            { id: 37, text: "Question 37.", options: ["A. many", "B. all", "C. every", "D. most"], correct: 2,
                explanation: "Từ \"student\" đang ở dạng số ít đếm được nên phải đi với \"every\" (mỗi học sinh). Các từ many, all, most đều yêu cầu danh từ theo sau phải ở dạng số nhiều."
            },
            { id: 38, text: "Question 38.", options: ["A. volunteers", "B. visitors", "C. customers", "D. passengers"], correct: 0,
                explanation: "Để thực hiện các hoạt động nhặt rác và trồng hoa, nhà trường cần \"volunteers\" (tình nguyện viên). Các từ khác (khách tham quan, khách hàng, hành khách) không hợp ngữ cảnh."
            },

            {
                groupHtml: `<div class="mt-10 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-comment-dots text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation (39-40)</h3></div>`,
                id: 39, text: "Question 39.", options: ["A. <u class='text-indigo-600 font-bold'>i</u>tinerary", "B. tour<u class='text-indigo-600 font-bold'>i</u>sm", "C. pun<u class='text-indigo-600 font-bold'>i</u>sh", "D. safar<u class='text-indigo-600 font-bold'>i</u>"], correct: 0,
                explanation: "Chữ \"i\" trong \"itinerary\" được phát âm là /aɪ/ (âm /aɪ/ ở đầu). Các từ còn lại có phần gạch chân phát âm là âm ngắn /ɪ/ (tourism, punish) hoặc /i/ (safari)."
            },
            { id: 40, text: "Question 40.", options: ["A. laugh<u class='text-indigo-600 font-bold'>ed</u>", "B. lik<u class='text-indigo-600 font-bold'>ed</u>", "C. pleas<u class='text-indigo-600 font-bold'>ed</u>", "D. wash<u class='text-indigo-600 font-bold'>ed</u>"], correct: 2,
                explanation: "Đuôi -ed trong \"pleased\" phát âm là /d/ (do tận cùng là âm hữu thanh /z/). Các từ còn lại laughed, liked, washed có tận cùng là các âm vô thanh (/f/, /k/, /ʃ/) nên đuôi -ed phát âm là /t/."
            }
        ]
    },

    // ĐỀ SỐ 2: ĐGNL VÀO LỚP 10 THPT CHUYÊN (MÃ ĐỀ 314)
    "eng-dhsp26-314": {
        title: "Kỳ Thi Thử Vào Lớp 10 THPT Chuyên (Lần 1)",
        subtitle: "THPT Chuyên ĐHSP Hà Nội • Lần 1 • Môn: Tiếng Anh • Mã đề: 314",
        subject: "Tiếng Anh",
        timeMinutes: 60,
        questions: [
            {
                groupHtml: `<div class="mt-4 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-circle-check text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the following questions.</h3></div>`,
                id: 1, text: "Question 1. A large number of visitors ________ attracted to this National Park over the past few years.", options: ["A. are being", "B. are", "C. have been", "D. will be"], correct: 2,
                explanation: "Dấu hiệu \"over the past few years\" (trong vài năm qua) yêu cầu thì Hiện tại hoàn thành. Cụm \"A large number of\" (Số lượng lớn) đi với động từ chia ở số nhiều. Do đó chọn \"have been\"."
            },
            { id: 2, text: "Question 2. There is no ________ explanation for what happened.", options: ["A. science", "B. scientific", "C. scientifically", "D. scientist"], correct: 1,
                explanation: "Trước danh từ \"explanation\" (lời giải thích) cần một tính từ để bổ nghĩa. Tính từ của science là \"scientific\" (thuộc về khoa học)."
            },
            { id: 3, text: "Question 3. I've lost ________ how many times she's been late for work this month.", options: ["A. my mind of", "B. my head of", "C. my marbles of", "D. count of"], correct: 3,
                explanation: "Thành ngữ \"lose count of\" có nghĩa là \"không thể nhớ nổi/không đếm nổi số lần\" (vì nó xảy ra quá nhiều)."
            },
            { id: 4, text: "Question 4. Human beings can have disagreements, ________ is why it's hard for some people to maintain many friendships.", options: ["A. there", "B. which", "C. what", "D. that"], correct: 1,
                explanation: "Đại từ quan hệ \"which\" được dùng sau dấu phẩy để thay thế cho toàn bộ mệnh đề phía trước (Việc con người có những bất đồng)."
            },
            { id: 5, text: "Question 5. The government has spent £1 million on an advertising ________ to encourage energy conservation.", options: ["A. operation", "B. promotion", "C. campaign", "D. competition"], correct: 2,
                explanation: "Cụm từ cố định (collocation): \"advertising campaign\" có nghĩa là \"chiến dịch quảng cáo\"."
            },
            { id: 6, text: "Question 6. The painting was a valuable family possession, which had been ________ from generation to generation.", options: ["A. handed across", "B. handed out", "C. handed down", "D. handed over"], correct: 2,
                explanation: "Cụm động từ \"hand down\" có nghĩa là \"truyền lại\" (từ thế hệ này sang thế hệ khác). Các từ khác: hand out (phân phát), hand over (bàn giao)."
            },
            { id: 7, text: "Question 7. I ________ my job applications to many companies. Finally, I ________ as a software programmer in Western Bank.", options: ["A. had submitted - was recruited", "B. submitted - had recruited", "C. submitted - recruited", "D. has submitted - was recruited"], correct: 0,
                explanation: "Hành động \"nộp đơn\" (submit) xảy ra và hoàn tất trước hành động \"được tuyển\" (was recruited) trong quá khứ, do đó vế đầu dùng thì Quá khứ hoàn thành (had submitted), vế sau dùng Quá khứ đơn bị động."
            },

            {
                groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-volume-high text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.</h3></div>`,
                id: 8, text: "Question 8.", options: ["A. integrate", "B. encourage", "C. tradition", "D. achievement"], correct: 0,
                explanation: "Từ \"integrate\" có trọng âm rơi vào âm tiết thứ 1. Các từ còn lại \"encourage\", \"tradition\", \"achievement\" đều nhấn trọng âm ở âm tiết thứ 2."
            },
            { id: 9, text: "Question 9.", options: ["A. anthem", "B. appear", "C. allow", "D. attend"], correct: 0,
                explanation: "Từ \"anthem\" có trọng âm rơi vào âm tiết thứ 1. Các từ còn lại \"appear\", \"allow\", \"attend\" đều là động từ 2 âm tiết có trọng âm rơi vào âm tiết thứ 2."
            },

            {
                groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-arrows-left-right text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the word(s) OPPOSITE in meaning to the underlined word(s).</h3></div>`,
                id: 10, text: "Question 10. The number of young people finding a part-time job in big cities has <u class='font-bold'>fluctuated</u> over the past five years.", options: ["A. increased", "B. levelled out", "C. decreased", "D. slowed down"], correct: 1,
                explanation: "Từ \"fluctuated\" (dao động, lên xuống thất thường) TRÁI NGHĨA với \"levelled out\" (ổn định, chững lại ở mức ngang bằng)."
            },
            { id: 11, text: "Question 11. If Jeff Bezos and his wife split their properties <u class='font-bold'>equally</u>, Ms. Mackenzie could become the richest woman in the world overnight.", options: ["A. oddly", "B. unevenly", "C. unwisely", "D. fairly"], correct: 1,
                explanation: "Từ \"equally\" (một cách bằng nhau, đồng đều) TRÁI NGHĨA với \"unevenly\" (không đồng đều, không bằng nhau)."
            },

            {
                groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-comment-dots text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation.</h3></div>`,
                id: 12, text: "Question 12.", options: ["A. <u class='font-bold'>h</u>ousework", "B. <u class='font-bold'>h</u>ardware", "C. <u class='font-bold'>h</u>onor", "D. <u class='font-bold'>h</u>andmade"], correct: 2,
                explanation: "Phụ âm \"h\" trong từ \"honor\" là âm câm (phát âm là /ˈɒnə/), trong khi ở các từ còn lại nó được phát âm là /h/."
            },
            { id: 13, text: "Question 13.", options: ["A. pump<u class='font-bold'>ed</u>", "B. laugh<u class='font-bold'>ed</u>", "C. celebrat<u class='font-bold'>ed</u>", "D. fix<u class='font-bold'>ed</u>"], correct: 2,
                explanation: "Đuôi \"-ed\" trong \"celebrated\" được phát âm là /ɪd/ (do kết thúc bằng âm /t/). Các từ còn lại pumped, laughed, fixed có đuôi \"-ed\" phát âm là /t/."
            },

            {
                groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-link text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the word(s) CLOSEST in meaning to the underlined word(s).</h3></div>`,
                id: 14, text: "Question 14. They provide care and support for disadvantaged children, helping them <u class='font-bold'>get over</u> difficulties.", options: ["A. accept", "B. overcome", "C. face", "D. take"], correct: 1,
                explanation: "Cụm động từ \"get over\" (vượt qua khó khăn, bệnh tật) có nghĩa GẦN NHẤT với động từ \"overcome\"."
            },
            { id: 15, text: "Question 15. For environmental safety, we need to find ways to reduce <u class='font-bold'>emission</u> of fumes and smoke from factories.", options: ["A. leak", "B. release", "C. pollutant", "D. poison"], correct: 1,
                explanation: "Từ \"emission\" (sự thải ra, xả ra) đồng nghĩa với từ \"release\"."
            },

            {
                groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-signs-post text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Choose the correct answer (A, B, C, or D) to each of the following signs/messages.</h3></div>`,
                id: 16, text: `Question 16. What does this message say?<br>
                <div class="italic p-3 bg-slate-50 border border-slate-200 rounded my-2 text-sm text-slate-700 font-medium">Dear Alex,<br>Given the current workload, we regret to inform you that your request cannot be accommodated at this time. We will review the situation next month.<br>Management</div>`, 
                options: [
                    "A. Management has approved the request.", 
                    "B. The workload will decrease next month.", 
                    "C. Alex's request has been permanently rejected.", 
                    "D. The request is postponed and may be reconsidered later."
                ], correct: 3,
                explanation: "Tin nhắn nói rằng yêu cầu hiện tại không thể được đáp ứng và sẽ được \"review\" (xem xét lại) vào tháng sau. Tức là nó bị hoãn (postponed) và có thể được cân nhắc sau (reconsidered later)."
            },
            { id: 17, text: `Question 17. What does this sign say?<br>
                <div class="italic p-3 bg-slate-50 border border-slate-200 rounded my-2 text-sm text-slate-700 font-medium font-bold">Staff Announcement</div>
                <div class="italic px-3 pb-3 text-sm text-slate-700">Due to scheduled maintenance, access to the building will be restricted after 6 p.m.</div>`, 
                options: [
                    "A. Only staff can enter the building after 6 p.m.", 
                    "B. The building will close completely at 6 p.m.", 
                    "C. Maintenance will begin at 6 p.m. and finish the same day.", 
                    "D. Entry may be limited after 6 p.m. because of maintenance."
                ], correct: 3,
                explanation: "Biển báo dùng từ \"restricted\" (hạn chế). Do đó đáp án \"Entry may be limited\" (Việc đi vào có thể bị hạn chế) là giải nghĩa chính xác nhất."
            },
            { id: 18, text: `Question 18. What does this message say?<br>
                <div class="italic p-3 bg-slate-50 border border-slate-200 rounded my-2 text-sm text-slate-700 font-medium">Hi Michael,<br>I've gone through your proposal and have a few concerns that we should probably discuss before taking this any further.<br>Karen</div>`, 
                options: [
                    "A. Karen has approved the proposal without changes.", 
                    "B. Karen is no longer interested in the proposal.", 
                    "C. Karen wants to reject the proposal immediately.", 
                    "D. Karen suggests discussing issues before proceeding."
                ], correct: 3,
                explanation: "Karen nói rằng có một vài lo ngại (concerns) cần phải thảo luận (discuss) trước khi tiến xa hơn (before taking this any further). Điều này khớp với đáp án D."
            },

            {
                groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-pen-nib text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Choose the best sentence (A, B, C, or D) made from the given cues.</h3></div>`,
                id: 19, text: "Question 19. laws/ must /pass /help /protect /environment.", options: [
                    "A. Some laws must pass to help protect our environment.",
                    "B. Some laws must be passed to help protect our environment.",
                    "C. Some laws must be pass to help protect our environment.",
                    "D. Some laws must passed to help protect our environment."
                ], correct: 1,
                explanation: "Câu cần dùng cấu trúc bị động vì \"luật\" không tự \"thông qua\" mà phải \"được thông qua\". Cấu trúc bị động của động từ khuyết thiếu: must + be + V(P2). Đáp án B: \"must be passed\" là đúng ngữ pháp."
            },
            { id: 20, text: "Question 20. How many /you /spend /read /newspapers /every day?", options: [
                "A. How many hours do you spend to read newspapers every day?",
                "B. How many hours do you spend reading newspapers every day?",
                "C. How many hours do you spend to be read newspapers every day?",
                "D. How many hours you spend on reading newspapers every day?"
            ], correct: 1,
                explanation: "Cấu trúc: \"spend time + V-ing\" (dành thời gian làm việc gì). Đáp án B thỏa mãn cả trợ động từ (do you spend) và dạng V-ing (reading)."
            },
            { id: 21, text: "Question 21. He /use /be /the best /our /national /football /team.", options: [
                "A. He was used being the best footballer of our national football team.",
                "B. He used to be the best footballer of our national football team.",
                "C. He used to being the best footballer of our national football team.",
                "D. He uses to be the best footballer of our national football team."
            ], correct: 1,
                explanation: "Cấu trúc: \"used to + V(nguyên thể)\" dùng để diễn tả một sự thật hoặc thói quen trong quá khứ nay không còn nữa (Anh ấy từng là cầu thủ giỏi nhất...)."
            },
            { id: 22, text: "Question 22. Although /fire /spread /quick /everybody /able /escape.", options: [
                "A. Although the fire spread quickly, everybody were able to escape.",
                "B. Although the fire spread quickly, but everybody was able to escape.",
                "C. Although the fire spread quickly, everybody was able to escape.",
                "D. Although the fire spread quickly, then everybody were able to escape."
            ], correct: 2,
                explanation: "Đã dùng \"Although\" thì không dùng \"but\" (loại B). Đại từ bất định \"everybody\" đi với động từ to be chia ở số ít (was), nên chọn C thay vì A (were)."
            },

            {
                groupHtml: `
                    <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-glasses text-indigo-500 mr-2"></i>Read the text below and answer the following questions (23-29). For each question, mark the correct letter (A, B, or C).</h3>
                        <div class="bg-white/70 p-5 rounded-xl border border-indigo-50">
                            <p class="text-slate-700 leading-relaxed mb-3 indent-6 text-justify">
                                Coachella is an annual music and arts festival held in the Coachella Valley of Southern California, United States. The festival was first held in 1999 and has since become one of the largest and most popular music festivals in the world. It is known for its diverse lineup of music genres, art installations, and celebrity sightings. It is one of the largest, most famous, and most profitable music festivals in the United States and the world. Most popular music magazines like rock music publish the details of the festival a few months before the date. So, this makes it easy for people to buy the tickets on time and know important event details.
                            </p>
                            <p class="text-slate-700 leading-relaxed mb-3 indent-6 text-justify">
                                Coachella's lineup typically features a mix of established and up-and-coming artists from a variety of genres, including rock, hip-hop, electronic dance music, and alternative. The festival also features art installations, interactive experiences, and a range of food and beverage options.
                            </p>
                            <p class="text-slate-700 leading-relaxed indent-6 text-justify">
                                In addition to the music and arts, Coachella has become known for its fashion, with attendees often wearing bohemian-inspired outfits and accessories. The festival has also faced criticism for issues such as overcrowding, high ticket prices, and the environmental impact of hosting such a large event in the desert.
                            </p>
                        </div>
                    </div>
                `,
                id: 23, text: "Question 23. Coachella is a music and arts festival organized annually in Northern California, United States.", options: ["A. Doesn't say", "B. Wrong", "C. Right"], correct: 1,
                explanation: "Bài đọc nêu rõ: \"held in the Coachella Valley of Southern California\". Khẳng định \"Northern California\" là sai (Wrong)."
            },
            { id: 24, text: "Question 24. Coachella has become one of the largest and most preferred music festivals in the world.", options: ["A. Wrong", "B. Doesn't say", "C. Right"], correct: 2,
                explanation: "Thông tin hoàn toàn chính xác theo bài: \"has since become one of the largest and most popular music festivals in the world\" (Right)."
            },
            { id: 25, text: "Question 25. Coachella offers on-site camping for a complete festival experience.", options: ["A. Wrong", "B. Doesn't say", "C. Right"], correct: 1,
                explanation: "Bài đọc không hề đề cập đến việc cắm trại tại chỗ (on-site camping) (Doesn't say)."
            },
            { id: 26, text: "Question 26. Most famous music magazines publish details about Coachella right before the festival's date.", options: ["A. Wrong", "B. Right", "C. Doesn't say"], correct: 0,
                explanation: "Bài đọc ghi rõ là các tạp chí đăng thông tin chi tiết \"a few months before the date\" (vài tháng trước ngày diễn ra), chứ không phải \"right before\" (ngay sát ngày) (Wrong)."
            },
            { id: 27, text: "Question 27. Attendees at Coachella often wear bohemian-inspired outfits and accessories to the festival.", options: ["A. Wrong", "B. Right", "C. Doesn't say"], correct: 1,
                explanation: "Khớp hoàn toàn với câu ở đoạn 3: \"with attendees often wearing bohemian-inspired outfits and accessories\" (Right)."
            },
            { id: 28, text: "Question 28. The festival has never received some criticism.", options: ["A. Right", "B. Wrong", "C. Doesn't say"], correct: 1,
                explanation: "Bài ghi: \"The festival has also faced criticism...\" (Lễ hội cũng từng đối mặt với chỉ trích). Nên câu khẳng định \"chưa bao giờ nhận chỉ trích\" là sai (Wrong)."
            },
            { id: 29, text: "Question 29. The environmental impact of organizing Coachella in the desert has not been a concern.", options: ["A. Right", "B. Doesn't say", "C. Wrong"], correct: 2,
                explanation: "Đoạn cuối bài khẳng định \"environmental impact\" (tác động môi trường) chính là một trong những lý do khiến Coachella bị chỉ trích. Việc nói nó \"không phải là nỗi lo ngại (has not been a concern)\" là sai sự thật (Wrong)."
            },

            {
                groupHtml: `
                    <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-glasses text-indigo-500 mr-2"></i>Read the text below and answer the following questions (30-34).</h3>
                        <div class="bg-white/70 p-5 rounded-xl border border-indigo-50">
                            <h4 class="font-bold text-center text-indigo-900 mb-3 uppercase tracking-wider">Open-air theatre</h4>
                            <p class="text-slate-700 leading-relaxed mb-3 indent-6 text-justify">
                                In Britain, the ancient tradition of open-air performances is still alive and well. Cornwall has some of Britain's oldest working theatres, with one open-air theatre actually built into a cliff, a project only recently completed. Two actors, Dave James and Muriel Thomas, came from London theatres to join a theatre company called Coastline. They now regularly perform in just such a theatre, by the sea. "One thing about performing outside is we never know what'll happen. For example, if a bird lands on stage, we can't act as if it's not there - the audience are all watching it. So we just bring the bird into the play, too. Once, about 30 dolphins came past, jumping out of the water and showing off. The audience were all chatting about them instead of watching the play, so the actors just gave up for a while and watched the dolphins, too."
                            </p>
                            <p class="text-slate-700 leading-relaxed indent-6 text-justify">
                                The weather can also be difficult. "Sometimes it's been so bad", says Muriel, "that we've asked the audience if they really want to stay. But usually they sit with their coats and umbrellas and say, 'Yes, please carry on!'. They must feel it isn't much fun, but no one's returned their ticket so far!". Coastline's director John Barnack, works hard to introduce people to theatre. "Many people think of theatres as clubs where they don't belong and are not welcome," he explains. "Sitting in the open air changes that feeling. The audience are far more involved - they aren't sitting in the dark, at a distance like in normal theatre, and that improves the actors' performances, too. I'm very proud of the work they've done so far."
                            </p>
                        </div>
                    </div>
                `,
                id: 30, text: "Question 30. What is the writer trying to do in the text?", options: [
                    "A. follow the development of open-air theatre in Britain",
                    "B. explain what it's like to work in an open-air theatre",
                    "C. warn readers about the disadvantages of attending open-air performances",
                    "D. describe how one open-air theatre was built"
                ], correct: 1,
                explanation: "Tác giả tập trung kể về những trải nghiệm thực tế (thời tiết, động vật hoang dã, sự tương tác của khán giả) của các diễn viên khi làm việc tại một nhà hát ngoài trời."
            },
            { id: 31, text: "Question 31. When plays are disturbed by local wildlife, the actors ________.", options: [
                "A. stop and have a chat with the audience",
                "B. carry on as though nothing had happened",
                "C. change their performance to include it",
                "D. cancel the rest of the performance"
            ], correct: 2,
                explanation: "Dựa vào câu: \"So we just bring the bird into the play, too.\" (Chúng tôi đưa luôn con chim vào vở kịch), nghĩa là họ thay đổi màn trình diễn để kết hợp cả tình huống bất ngờ đó vào."
            },
            { id: 32, text: "Question 32. What is the audience's attitude to bad weather during performances?", options: [
                "A. They accept it as they have come well-prepared.",
                "B. They say that it stops them enjoying the play.",
                "C. They feel they should have their money back.",
                "D. They worry about the actors getting wet."
            ], correct: 0,
                explanation: "Khán giả chấp nhận thời tiết xấu vì họ chuẩn bị sẵn sàng (ngồi với áo khoác, ô dù) và hô to \"Yes, please carry on!\" (Làm ơn tiếp tục đi) thay vì đòi trả lại vé."
            },
            { id: 33, text: "Question 33. What does John Barnack say about outdoor theatre?", options: [
                "A. He's worried that it creates an atmosphere similar to a club.",
                "B. He welcomes the distance it creates between actors and audience.",
                "C. He's afraid the atmosphere is more stressful for actors.",
                "D. He's happy that the audience feel comfortable being there."
            ], correct: 3,
                explanation: "Đạo diễn John Barnack nói rằng không gian ngoài trời làm xóa bỏ cảm giác lạc lõng (\"changes that feeling\"), khiến khán giả hòa nhập hơn và không bị xa cách. Ông rất tự hào về điều đó."
            },
            { id: 34, text: "Question 34. What would an actor from the Coastline company write in his or her diary?", options: [
                "A. A difficult performance today - it was pouring with rain. Luckily the audience couldn't see my face in the dark.",
                "B. I'm glad I moved from the London theatre scene. But I don't think our director is satisfied with what we've done so far...",
                "C. The theatre looks so old it's hard to imagine they've just finished it. I'd prefer to be by the sea while I'm performing though....",
                "D. I'm keeping a tradition going, and it tests my acting skills, as I never know what unexpected things I'll have to deal with..."
            ], correct: 3,
                explanation: "Đoạn nhật ký D phản ánh đúng nhất nội dung bài: Gìn giữ một truyền thống lâu đời, rèn luyện kỹ năng diễn xuất vì liên tục phải đối mặt với những sự cố bất ngờ (như động vật hoang dã hay thời tiết)."
            },

            {
                groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-code-compare text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Choose the sentence that is closest in meaning to the sentences in bold.</h3></div>`,
                id: 35, text: "Question 35. <b class='text-indigo-800'>He survived the operation thanks to skillful surgery.</b>", options: [
                    "A. He survived because he was a skillful surgeon.",
                    "B. Without skillful surgery, he wouldn't have survived the operation.",
                    "C. There was no skillful surgery, so he died.",
                    "D. In spite of the surgery, he didn't survive."
                ], correct: 1,
                explanation: "Câu gốc: \"Anh ấy sống sót ca phẫu thuật nhờ vào tay nghề mổ điêu luyện.\" -> Câu B sử dụng câu điều kiện loại 3 với \"Without\" (Nếu không có ca mổ điêu luyện, anh ấy đã không thể sống sót) là sát nghĩa nhất."
            },
            { id: 36, text: "Question 36. <b class='text-indigo-800'>An electronic brain refers to a large computing machine depending primarily on electronic devices for its operation.</b>", options: [
                "A. An electronic brain depends on a large computing machine for its operations with electronic devices.",
                "B. A large computing machine depending primarily on electronic devices for its operation is known as an electronic brain.",
                "C. Depending on electronic devices primarily for its operations is a large computing machine as an electronic brain.",
                "D. A large computing machine depends on an electronic brain for its operations with electronic devices."
            ], correct: 1,
                explanation: "Cụm từ \"refers to\" (được nhắc đến như là, ám chỉ) tương đương với cụm \"is known as\" (được biết đến như là) trong đáp án B."
            },
            { id: 37, text: "Question 37. <b class='text-indigo-800'>No sooner had I turned on my new PC than there was a strange noise.</b>", options: [
                "A. Soon after I turned on my PC was there a strange noise.",
                "B. Scarcely had I turned on my new PC when there was a strange noise.",
                "C. Hardly had I turned on my new PC than there was a strange noise.",
                "D. As soon as there was a strange noise, I turned on my new PC."
            ], correct: 1,
                explanation: "Cấu trúc đảo ngữ \"No sooner... than\" (Ngay khi... thì) tương đương tuyệt đối với cấu trúc \"Scarcely... when\" hoặc \"Hardly... when\". Đáp án C sai do dùng \"Hardly... than\" thay vì \"when\"."
            },
            { id: 38, text: "Question 38. <b class='text-indigo-800'>It is no use trying to persuade her to agree to the proposal.</b>", options: [
                "A. It is not worth to try to persuade her to agree to the proposal.",
                "B. To try persuading her to agree to the proposal is not good.",
                "C. There is no point to try to persuade her to agree to the proposal.",
                "D. It is a waste of time trying to persuade her to agree to the proposal."
            ], correct: 3,
                explanation: "Thành ngữ \"It is no use + V-ing\" (Thật vô ích khi làm gì) đồng nghĩa với \"It is a waste of time + V-ing\" (Thật lãng phí thời gian khi làm gì). Chú ý câu C sai ngữ pháp vì phải là \"There is no point in trying\"."
            },

            {
                groupHtml: `
                    <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-glasses text-indigo-500 mr-2"></i>You are going to read an article about people who gave up their jobs to start their own business. For each question (39-45), mark the correct letter (A, B, C, or D).</h3>
                        <div class="bg-white/70 p-5 rounded-xl border border-indigo-50">
                            <h4 class="font-bold text-center text-indigo-900 mb-4 uppercase tracking-wider">Starting your own business</h4>
                            
                            <div class="mb-4">
                                <h5 class="font-bold text-indigo-800 border-b border-indigo-100 pb-1 mb-2">A. Beautician</h5>
                                <p class="text-slate-700 text-[14.5px] leading-relaxed text-justify">
                                    I had to rethink my future when the multi-national company I worked for as a marketing executive decided to move my job to the USA. Well, I wanted a job where I'd have the chance to interact with people more, and saw a gap in the market for a beauty salon locally. Working for yourself is great... But the flipside is that there's nobody to share the burden with when you wake up in the middle of the night worrying about how you're going to pay the rent. But I have no regrets.
                                </p>
                            </div>
                            
                            <div class="mb-4">
                                <h5 class="font-bold text-indigo-800 border-b border-indigo-100 pb-1 mb-2">B. Gym owner</h5>
                                <p class="text-slate-700 text-[14.5px] leading-relaxed text-justify">
                                    After seventeen years working in banking, I wanted to try something totally different. A business that used a combination of my financial, sporting and parenting experience, but which didn't involve such long exhausting hours at the office appealed to me a great deal. I came across the concept behind The Little Gym by accident... Having control of my own life is a definite high, as is seeing my staff doing a good job.
                                </p>
                            </div>

                            <div class="mb-4">
                                <h5 class="font-bold text-indigo-800 border-b border-indigo-100 pb-1 mb-2">C. Caterer</h5>
                                <p class="text-slate-700 text-[14.5px] leading-relaxed text-justify">
                                    I worked for a big international company, but was no longer finding it rewarding. I took six months off and we went to stay with my wife's family in Spain. It was a good opportunity to ponder the question: 'What next?' That's when we got the idea for Tapas in a Box. The challenge was then to work out how to deliver the mix of foods all at once, because tapas includes things like raw almonds and chilled cheeses as well as hot things. Once we'd cracked that, we were up and running. I can't stress too much the thrill you feel when a customer tells you they've had a great time.
                                </p>
                            </div>

                            <div class="">
                                <h5 class="font-bold text-indigo-800 border-b border-indigo-100 pb-1 mb-2">D. Virtual PA</h5>
                                <p class="text-slate-700 text-[14.5px] leading-relaxed text-justify">
                                    I'd been a secretary and personal assistant (PA) for twenty years... I got my idea because, in effect, I'd been a virtual PA all along. My boss was usually only in the office a couple of days a month, so we'd always worked remotely by email and phone calls. I thought I could offer a similar service to other busy people. Now I've got all sorts of regular clients, including surveyors, solicitors, an advertising agency and even an author. I never expected such a mix.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
                id: 39, text: "Question 39. Which person enjoys seeing employees making a success of things?", options: ["A. Beautician", "B. Virtual PA", "C. Caterer", "D. Gym owner"], correct: 3,
                explanation: "Đoạn Gym owner có nhắc đến việc ông ấy cảm thấy thăng hoa khi tự làm chủ và: \"seeing my staff doing a good job\" (thấy nhân viên của mình làm tốt công việc)."
            },
            { id: 40, text: "Question 40. Which person had to solve a technical problem before launching the business?", options: ["A. Virtual PA", "B. Beautician", "C. Gym owner", "D. Caterer"], correct: 3,
                explanation: "Đoạn Caterer (người làm dịch vụ ăn uống) nhắc đến thử thách phải nghĩ cách giao hỗn hợp thức ăn nóng và lạnh cùng một lúc (\"work out how to deliver the mix of foods all at once\"). Đó chính là một bài toán kĩ thuật cần giải quyết."
            },
            { id: 41, text: "Question 41. Which person is surprised to have attracted such a wide variety of clients?", options: ["A. Caterer", "B. Gym owner", "C. Virtual PA", "D. Beautician"], correct: 2,
                explanation: "Trong đoạn Virtual PA có viết: \"Now I've got all sorts of regular clients... I never expected such a mix.\" (Giờ tôi có đủ loại khách quen... Tôi chưa từng nghĩ lại có một sự kết hợp đa dạng đến thế)."
            },
            { id: 42, text: "Question 42. Which person is happy to have received positive feedback from clients?", options: ["A. Beautician", "B. Gym owner", "C. Caterer", "D. Virtual PA"], correct: 2,
                explanation: "Đoạn Caterer có câu: \"I can't stress too much the thrill you feel when a customer tells you they've had a great time.\" (Sự sung sướng tột độ khi được khách hàng khen ngợi)."
            },
            { id: 43, text: "Question 43. Which person sometimes feels anxious about financial aspects of the business?", options: ["A. Beautician", "B. Gym owner", "C. Virtual PA", "D. Caterer"], correct: 0,
                explanation: "Trong đoạn Beautician, người này tâm sự rằng đôi khi thức dậy giữa đêm trằn trọc lo sợ về việc: \"how you're going to pay the rent\" (làm thế nào để trả được tiền thuê mặt bằng)."
            },
            { id: 44, text: "Question 44. Which person took time to decide what type of business to start?", options: ["A. Caterer", "B. Gym owner", "C. Beautician", "D. Virtual PA"], correct: 0,
                explanation: "Đoạn Caterer tiết lộ người này đã: \"took six months off... It was a good opportunity to ponder the question: 'What next?'\" (dành 6 tháng nghỉ ngơi để từ từ suy nghĩ xem nên kinh doanh gì tiếp theo)."
            },
            { id: 45, text: "Question 45. Which person was able to draw on experience gained in a similar working situation?", options: ["A. Virtual PA", "B. Gym owner", "C. Beautician", "D. Caterer"], correct: 0,
                explanation: "Virtual PA chia sẻ rằng ý tưởng kinh doanh đến vì bản thân bà ấy thực chất đã luôn làm công việc tương tự: \"in effect, I'd been a virtual PA all along\" (làm việc từ xa qua email và điện thoại suốt 20 năm)."
            },

            {
                groupHtml: `
                    <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-pen-to-square text-indigo-500 mr-2"></i>Read the following passage and mark the letter A, B, C, or D to indicate the correct word or phrase that best fits each the numbered blanks (46-50).</h3>
                        <div class="bg-white/70 p-5 rounded-xl border border-indigo-50">
                            <p class="text-slate-700 leading-relaxed indent-6 text-justify">
                                Why is it that many teenagers have the energy to play computer games until late at night but can't find the energy to get out of bed (46) ________ for school? According to a new report, today's children are in danger of getting so (47) ________ sleep that they are putting their mental and physical health at (48) ________. Adults can easily survive on seven to eight hours' sleep a night, (49) ________ teenagers require nine or ten hours. According to medical experts, one in five youngsters (50) ________ anything between two and five hours' sleep a night less than their parents did at their age.
                            </p>
                        </div>
                    </div>
                `,
                id: 46, text: "Question 46.", options: ["A. about time", "B. behind time", "C. in time", "D. at time"], correct: 2,
                explanation: "Cụm từ \"in time for something\" có nghĩa là \"kịp lúc/đúng giờ\" cho việc gì đó (kịp giờ đi học)."
            },
            { id: 47, text: "Question 47.", options: ["A. few", "B. much", "C. less", "D. little"], correct: 3,
                explanation: "Ngữ cảnh đang nói về tác hại của việc ngủ quá ít. Danh từ \"sleep\" (giấc ngủ) không đếm được, nên phải đi với \"little\" (so little sleep: ngủ quá ít)."
            },
            { id: 48, text: "Question 48.", options: ["A. threat", "B. chance", "C. danger", "D. risk"], correct: 3,
                explanation: "Cụm từ cố định: \"put someone/something at risk\" (đặt ai/cái gì vào tình thế nguy hiểm/rủi ro)."
            },
            { id: 49, text: "Question 49.", options: ["A. whereas", "B. because", "C. or", "D. so"], correct: 0,
                explanation: "Vế trước nói người lớn chỉ cần 7-8 tiếng, vế sau nói tuổi teen cần tới 9-10 tiếng. Cần dùng liên từ chỉ sự tương phản \"whereas\" (trong khi đó)."
            },
            { id: 50, text: "Question 50.", options: ["A. makes", "B. puts", "C. brings", "D. gets"], correct: 3,
                explanation: "Trong tiếng Anh ta dùng cụm \"get sleep\" để diễn tả việc có được giấc ngủ, ngủ được bao nhiêu tiếng. Do đó chọn \"gets\"."
            }
        ]
    },
    "eng-hn2025-001": {
        title: "Kỳ Thi Tuyển Sinh Vào Lớp 10 THPT (2025)",
        subtitle: "Sở GD&ĐT Hà Nội • Môn: Tiếng Anh • Mã đề: 001",
        subject: "Tiếng Anh",
        timeMinutes: 60,
        questions: [
            {
                groupHtml: `<div class="mt-4 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-volume-high text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.</h3></div>`,
                id: 1, text: "Question 1.", options: ["A. diversity", "B. electrical", "C. generation", "D. delivery"], correct: 2,
                explanation: "Từ \"generation\" có trọng âm rơi vào âm tiết thứ 3 (/ˌdʒen.əˈreɪ.ʃən/). Các từ còn lại có trọng âm rơi vào âm tiết thứ 2: diversity (/daɪˈvɜː.sə.ti/), electrical (/iˈlek.trɪ.kəl/), delivery (/dɪˈlɪv.ər.i/)."
            },
            { id: 2, text: "Question 2.", options: ["A. distance", "B. value", "C. culture", "D. event"], correct: 3,
                explanation: "Từ \"event\" có trọng âm rơi vào âm tiết thứ 2 (/ɪˈvent/). Các từ còn lại đều là danh từ 2 âm tiết có trọng âm rơi vào âm tiết thứ 1."
            },

            {
                groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-circle-check text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions.</h3></div>`,
                id: 3, text: "Question 3. If the cost of public transportation ________, more people ________ it regularly.", options: ["A. decrease - can't use", "B. may decrease - won't use", "C. decreases - will use", "D. will decrease - uses"], correct: 2,
                explanation: "Câu điều kiện loại 1 diễn tả một sự việc có thể xảy ra ở hiện tại hoặc tương lai. Cấu trúc: If + S + V(hiện tại đơn), S + will/can + V(nguyên thể)."
            },
            { id: 4, text: "Question 4. Your effort and creativity made one of ________ events of our company a huge success.", options: ["A. Ø (no article)", "B. a", "C. an", "D. the"], correct: 3,
                explanation: "Dùng mạo từ xác định \"the\" vì danh từ \"events\" đã được xác định rõ bởi cụm từ bổ nghĩa phía sau là \"of our company\" (những sự kiện của công ty chúng ta)."
            },
            { id: 5, text: "Question 5. Our English test ________ next Monday at nine o'clock, so please arrive ten minutes early!", options: ["A. starts", "B. starting", "C. has started", "D. will be start"], correct: 0,
                explanation: "Dùng thì Hiện tại đơn (starts) để nói về một lịch trình, thời gian biểu đã được lên lịch sẵn và cố định (bài kiểm tra bắt đầu lúc 9 giờ thứ Hai tuần sau)."
            },
            { id: 6, text: "Question 6. Her daughter didn't ________ eat chips when she was younger.", options: ["A. use to", "B. not use to", "C. used to", "D. got used to"], correct: 0,
                explanation: "Cấu trúc từng làm gì trong quá khứ: \"used to + V\". Khi chuyển sang dạng phủ định ta mượn trợ động từ \"didn't\" và động từ chính trở về nguyên thể: \"didn't use to + V\"."
            },
            { id: 7, text: "Question 7. Two of ________ festivals in Viet Nam are the Ban Flower Festival and the Spring Festival.", options: ["A. as famous as", "B. much famous", "C. more famous", "D. the most famous"], correct: 3,
                explanation: "Cấu trúc \"One of / Two of + the + so sánh nhất + danh từ số nhiều\" mang nghĩa: Một trong số / Hai trong số những... nhất."
            },
            { id: 8, text: "Question 8. Emily shares that she failed the drama club interview, and Phuong responds.<br><span class='block mt-2 text-indigo-900 bg-indigo-50/50 p-2 rounded-lg'>- Emily: \"I didn't perform well at our school's drama club interview.\"<br>- Phuong: \"________\"</span>", options: ["A. That club is too hard for them to try.", "B. I think I should join something else.", "C. Don't give up! You'll have another chance.", "D. Maybe you should try something more challenging."], correct: 2,
                explanation: "Khi Emily nói rằng cô ấy đã làm không tốt ở buổi phỏng vấn, Phương nên đáp lại bằng một lời an ủi, động viên: \"Don't give up! You'll have another chance.\" (Đừng bỏ cuộc! Bạn sẽ có cơ hội khác)."
            },
            { id: 9, text: "Question 9. While living in France, Marie ________ French quite quickly by interacting with locals daily.", options: ["A. picked up", "B. put up", "C. took up", "D. brought up"], correct: 0,
                explanation: "Cụm động từ \"pick up\" có nghĩa là học lỏm, học một kỹ năng/ngôn ngữ một cách tự nhiên qua quá trình giao tiếp, rất phù hợp với ngữ cảnh \"interacting with locals daily\"."
            },
            { id: 10, text: "Question 10. The teacher's kind words of ________ helped me speak confidently in front of the class.", options: ["A. encouraging", "B. encouragement", "C. encouraged", "D. encourage"], correct: 1,
                explanation: "Sau giới từ \"of\" ta cần một danh từ. \"encouragement\" (sự động viên, khích lệ) là danh từ hoàn toàn phù hợp."
            },

            {
                groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-comment-dots text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation.</h3></div>`,
                id: 11, text: "Question 11.", options: ["A. touch<u class='font-bold text-indigo-600'>ed</u>", "B. develop<u class='font-bold text-indigo-600'>ed</u>", "C. focus<u class='font-bold text-indigo-600'>ed</u>", "D. belov<u class='font-bold text-indigo-600'>ed</u>"], correct: 3,
                explanation: "Từ \"beloved\" khi là tính từ thì đuôi \"-ed\" được phát âm là /ɪd/ (/bɪˈlʌv.ɪd/). Các từ còn lại có đuôi \"-ed\" phát âm là /t/ do tận cùng bằng các âm vô thanh (/tʃ/, /p/, /s/)."
            },
            { id: 12, text: "Question 12.", options: ["A. d<u class='font-bold text-indigo-600'>a</u>nger", "B. f<u class='font-bold text-indigo-600'>a</u>shion", "C. <u class='font-bold text-indigo-600'>a</u>ngel", "D. <u class='font-bold text-indigo-600'>a</u>ncient"], correct: 1,
                explanation: "Chữ \"a\" trong \"fashion\" được phát âm là /æ/. Trong các từ còn lại, nó được phát âm là /eɪ/."
            },

            {
                groupHtml: `
                    <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-clipboard-list text-indigo-500 mr-2"></i>Read the following announcement and mark the correct option that best fits each of the numbered blanks from 13 to 16.</h3>
                        
                        <div class="bg-white p-6 rounded-xl border-2 border-dashed border-indigo-300 shadow-sm font-medium text-slate-700">
                            <h4 class="text-center font-black text-lg text-indigo-900 mb-2 uppercase tracking-widest">TAKE PART IN A MOCK INTERVIEW FOR A SUMMER JOB</h4>
                            <p class="mb-4 italic text-[15px] text-slate-600 border-b border-indigo-100 pb-2">Your friend and you are planning to apply for a summer job in Da Nang. Prepare!</p>
                            
                            <ul class="list-none space-y-3 pl-1">
                                <li class="flex items-start gap-2"><i class="fa-solid fa-circle text-[8px] mt-2 text-indigo-400"></i> <span>Choose one of the jobs you like. The interview will be <b class="text-indigo-700">(13) ________</b> July 20<sup>th</sup>.</span></li>
                                <li class="flex items-start gap-2"><i class="fa-solid fa-circle text-[8px] mt-2 text-indigo-400"></i> <span>Decide who is going to apply and who is going to hire.</span></li>
                                <li class="flex items-start gap-2"><i class="fa-solid fa-circle text-[8px] mt-2 text-indigo-400"></i> <span>Prepare the interview in pairs.
                                    <ul class="list-none space-y-2 mt-2 ml-4 text-[14.5px] border-l-2 border-indigo-100 pl-3">
                                        <li><b>- Interviewee:</b> Get ready to present yourself with personal information, qualities, skills, experience and availability. Prepare <b class="text-indigo-700">(14) ________</b> questions about what you want to know about the job such as tasks, working hours and colleagues.</li>
                                        <li><b>- Interviewer:</b> Prepare the questions you are going to ask: personal information, qualities, skills, experience and availability.</li>
                                    </ul>
                                </span></li>
                                <li class="flex items-start gap-2"><i class="fa-solid fa-circle text-[8px] mt-2 text-indigo-400"></i> <span>Give the job interview.</span></li>
                                <li class="flex items-start gap-2"><i class="fa-solid fa-circle text-[8px] mt-2 text-indigo-400"></i> <span>Your classmates will comment on your <b class="text-indigo-700">(15) ________</b> during the interview.</span></li>
                                <li class="flex items-start gap-2"><i class="fa-solid fa-circle text-[8px] mt-2 text-indigo-400"></i> <span>For <b class="text-indigo-700">(16) ________</b> information, contact 19007666.</span></li>
                            </ul>
                        </div>
                    </div>
                `,
                id: 13, text: "Question 13.", options: ["A. on", "B. at", "C. in", "D. of"], correct: 0,
                explanation: "Đi với ngày tháng cụ thể (July 20th) ta bắt buộc phải dùng giới từ \"on\"."
            },
            { id: 14, text: "Question 14.", options: ["A. a lot", "B. a few", "C. much of", "D. little of"], correct: 1,
                explanation: "Danh từ \"questions\" là danh từ đếm được số nhiều. Dùng \"a few\" (một vài) là phù hợp nhất về ngữ pháp và ý nghĩa. Không dùng \"a lot\" vì thiếu \"of\"."
            },
            { id: 15, text: "Question 15.", options: ["A. entrance", "B. performance", "C. allowance", "D. instance"], correct: 1,
                explanation: "Các bạn cùng lớp sẽ nhận xét về \"sự thể hiện / phần trình diễn\" (performance) của bạn trong cuộc phỏng vấn."
            },
            { id: 16, text: "Question 16.", options: ["A. wider", "B. bigger", "C. further", "D. lesser"], correct: 2,
                explanation: "Cụm từ cố định: \"For further information\" có nghĩa là \"Để biết thêm thông tin chi tiết\"."
            },

            {
                groupHtml: `
                    <div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2">
                        <i class="fa-solid fa-layer-group text-indigo-500"></i>
                        <h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the correct answer to each of the following questions from 17 to 18.</h3>
                    </div>
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 text-slate-700 leading-relaxed text-justify">
                        <b>(17) ________</b> It helps people understand each other more clearly by using eye contact, body language, and facial expressions. <b>(18) ________</b> Because of these advantages, face-to-face communication is still very important in our daily lives.
                    </div>
                `,
                id: 17, text: "Question 17. Choose the TOPIC SENTENCE that can BEGIN the text most appropriately.", options: [
                    "A. Face-to-face communication brings many important benefits.",
                    "B. Nowadays, people often text or call instead of meeting in person.",
                    "C. Talking in person helps avoid confusion caused by unclear messages.",
                    "D. Eye contact and body language help make a message easier to understand."
                ], correct: 0,
                explanation: "Đoạn văn nói về các lợi ích của giao tiếp trực tiếp (giúp hiểu nhau rõ hơn qua ánh mắt, ngôn ngữ cơ thể, và rất quan trọng trong đời sống). Vì vậy, câu chủ đề A khái quát nhất toàn bộ nội dung."
            },
            {
                id: 18, text: "Question 18. Put the sentences (a-c) in the correct order, then fill in the blank to make a logical text.<br><span class='text-sm text-slate-500 font-normal mt-2 block p-3 bg-white rounded-lg border border-slate-200'>a. Talking in person also builds stronger relationships and creates more trust.<br>b. These non-verbal signals make the message easier to understand and help avoid confusion.<br>c. Spending time together allows friends and family to feel closer and more connected.</span>", options: [
                    "A. c - b - a",
                    "B. c - a - b",
                    "C. b - a - c",
                    "D. a - b - c"
                ], correct: 2,
                explanation: "Câu trước đó nhắc đến \"eye contact, body language...\" (các tín hiệu phi ngôn ngữ), nên câu tiếp nối phải là (b) \"These non-verbal signals...\". Tiếp theo là việc bổ sung lợi ích (a) \"also builds stronger relationships...\", và cuối cùng (c) giải thích thêm cho ý xây dựng mối quan hệ. Thứ tự đúng là b - a - c."
            },

            {
                groupHtml: `
                    <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-pen-to-square text-indigo-500 mr-2"></i>Mark the correct option that best fits each of the numbered blanks from 19 to 24.</h3>
                        <div class="bg-white/70 p-5 rounded-xl border border-indigo-50">
                            <p class="text-slate-700 leading-relaxed mb-3 indent-6 text-justify">
                                A lot of teenagers love music. It helps them express themselves and connect with others. Teens often listen to music through headphones or go to concerts with friends. However, <b class="text-indigo-700">(19) ________</b> good or bad effects on teen behaviour?
                            </p>
                            <p class="text-slate-700 leading-relaxed mb-3 indent-6 text-justify">
                                Some people believe that music has a couple of positive effects. It can make teens feel better when they are sad, and it helps them connect <b class="text-indigo-700">(20) ________</b> like the same music. Also, learning to play an instrument or write songs can make teens more creative and disciplined.
                            </p>
                            <p class="text-slate-700 leading-relaxed mb-3 indent-6 text-justify">
                                <b class="text-indigo-700">(21) ________</b>, some people worry about the negative effects. Some songs with violent or bad words might influence teens to act in risky ways. Music <b class="text-indigo-700">(22) ________</b> teens' hearing if they listen to it too loudly through headphones.
                            </p>
                            <p class="text-slate-700 leading-relaxed indent-6 text-justify">
                                Parents <b class="text-indigo-700">(23) ________</b> an important role in helping teens make good choices about music. They <b class="text-indigo-700">(24) ________</b> talk to teens about the meaning of songs and help them avoid harmful music. With the right guidance, music can have a good influence on teenagers.
                            </p>
                        </div>
                    </div>
                `,
                id: 19, text: "Question 19.", options: ["A. does music have", "B. do music have", "C. do music has", "D. does music has"], correct: 0,
                explanation: "Đây là một câu hỏi nghi vấn với chủ ngữ \"music\" (số ít), nên ta phải mượn trợ động từ \"does\" và động từ chính giữ nguyên \"have\"."
            },
            { id: 20, text: "Question 20.", options: ["A. who with others", "B. with others who", "C. with others whom", "D. whom with others"], correct: 1,
                explanation: "Cụm \"connect with others\" (kết nối với những người khác). Phía sau cần đại từ quan hệ \"who\" đóng vai trò làm chủ ngữ thay thế cho \"others\" -> \"with others who\"."
            },
            { id: 21, text: "Question 21.", options: ["A. However", "B. Moreover", "C. Besides", "D. Therefore"], correct: 0,
                explanation: "Đoạn trước đang nói về \"positive effects\" (tác động tích cực), đoạn này lại nói về \"negative effects\" (tiêu cực) và sự lo lắng. Do đó dùng \"However\" (Tuy nhiên) để thể hiện sự tương phản."
            },
            { id: 22, text: "Question 22.", options: ["A. hurt can also", "B. can also hurt", "C. also hurt can", "D. hurt also can"], correct: 1,
                explanation: "Trật tự từ đúng: Động từ khuyết thiếu (can) + Trạng từ (also) + Động từ chính (hurt) -> \"can also hurt\"."
            },
            { id: 23, text: "Question 23.", options: ["A. play", "B. send", "C. run", "D. go"], correct: 0,
                explanation: "Cụm từ cố định: \"play a role in...\" (đóng vai trò trong việc gì)."
            },
            { id: 24, text: "Question 24.", options: ["A. shouldn't", "B. should", "C. ought not", "D. ought"], correct: 1,
                explanation: "Dùng \"should\" (nên) để đưa ra lời khuyên: Cha mẹ nên nói chuyện với con cái về ý nghĩa bài hát."
            },

            {
                groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-signs-post text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Read the following notice or message and mark the letter A, B, C, or D to indicate the correct answer.</h3></div>`,
                id: 25, 
                text: `Question 25. What does the notice say?
                    <div class="bg-white border-2 border-slate-800 rounded p-4 mx-auto my-4 w-fit shadow-[4px_4px_0_0_rgba(30,41,59,1)] flex items-center gap-6">
                        <div>
                            <div class="font-bold text-lg mb-2 text-slate-800">Plastic bags - 0.2$</div>
                            <div class="font-bold text-base text-slate-800">Use your own bag - FREE!</div>
                        </div>
                        <i class="fa-solid fa-bag-shopping text-4xl text-slate-700"></i>
                    </div>`, 
                options: [
                    "A. The shop sells two different kinds of bag.",
                    "B. The shop doesn't sell bags to customers.",
                    "C. Customers can get plastic bags free of charge.",
                    "D. Customers have to pay for plastic bags."
                ], correct: 3,
                explanation: "Biển báo ghi rõ \"Plastic bags - 0.2$\" (Túi nilon giá 0.2 đô la), tức là khách hàng phải trả tiền nếu muốn dùng túi nilon (Customers have to pay for plastic bags)."
            },
            { 
                id: 26, 
                text: `Question 26. What does the message say?
                    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-5 mx-auto my-4 w-full sm:w-[80%] shadow-md transform rotate-1 relative">
                        <div class="absolute top-2 right-1/2 translate-x-1/2 w-8 h-3 bg-red-400/50 rounded-full blur-[1px] rotate-[-2deg]"></div>
                        <div class="font-comic italic text-slate-700 text-[15px] leading-relaxed">
                            Hey! I can't come to basketball practice today. I have a dentist appointment after school. Can you tell the coach for me?<br><span class="font-bold mt-2 block">Emma</span>
                        </div>
                    </div>`, 
                options: [
                    "A. Emma invites you to go to the dentist with her.",
                    "B. Emma is asking you to reschedule her appointment.",
                    "C. Emma is asking you to tell the coach she won't come.",
                    "D. Emma wants you to meet her after basketball practice."
                ], correct: 2,
                explanation: "Trong mẩu giấy, Emma viết \"Can you tell the coach for me?\" (Bạn có thể nói lại với huấn luyện viên giúp mình không?), ý là nhờ báo lại rằng cô ấy sẽ không đến tập."
            },

            {
                groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-wrench text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the sentence that is best made from the given cues.</h3></div>`,
                id: 27, text: "Question 27. I / look / forward / present / robotics project / class / winter break.", options: [
                    "A. I'm looking forward to presenting my robotics project to the class after the winter break.",
                    "B. I'm looking forward to present my robotics project for the class after winter break.",
                    "C. I look forward to present my robotics project to the class after the winter break.",
                    "D. I'm looking forward presenting my robotics project to the class after a winter break."
                ], correct: 0,
                explanation: "Cấu trúc mong đợi điều gì: \"look forward to + V-ing\". Chỉ có đáp án A là sử dụng đúng \"to presenting\" và mạo từ/giới từ phù hợp (\"to the class\", \"after the winter break\")."
            },
            { id: 28, text: "Question 28. The contestant / who / guess / the secret words / stay / in front of / the board.", options: [
                "A. The contestant who guess the secret words stay in front of the board.",
                "B. The contestant who guesses the secret words stay in front of the board.",
                "C. The contestant who guesses the secret words stays in front of the board.",
                "D. The contestant who guess the secret words stays in front of the board."
            ], correct: 2,
                explanation: "Chủ ngữ \"The contestant\" (số ít) nên động từ trong mệnh đề quan hệ phải chia số ít (\"guesses\"). Đồng thời, động từ chính của câu cũng phải chia số ít (\"stays\")."
            },

            {
                groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-code-compare text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the sentence that is closest in meaning to the original sentence.</h3></div>`,
                id: 29, text: "Question 29. These old photos remind us of the fun times we had on our family holiday.", options: [
                    "A. These old photos make us remember the fun times we had on our family holiday.",
                    "B. We took these photos during the fun times we had on our family holiday.",
                    "C. The fun times we had on our family holiday brings back the memory of these photos.",
                    "D. These photos help me experienced the fun times during our family holiday."
                ], correct: 0,
                explanation: "Cấu trúc \"remind someone of something\" (gợi cho ai nhớ về điều gì) đồng nghĩa với \"make someone remember something\"."
            },
            { id: 30, text: "Question 30. Linh asked me whether she had to wait there any longer.", options: [
                "A. \"Do you have to wait here any longer?\" Linh asked me.",
                "B. \"Do I have to wait here any longer?\" Linh asked me.",
                "C. \"Did I had to wait there any longer?\" Linh asked me.",
                "D. \"Does she has to wait here any longer?\" Linh asked me."
            ], correct: 1,
                explanation: "Khi chuyển từ câu gián tiếp sang câu trực tiếp: Lùi về thì Hiện tại đơn (\"had to\" thành \"have to\"), trạng từ chỉ nơi chốn (\"there\" thành \"here\"), và đại từ \"she\" là đang chỉ chính Linh nên trong ngoặc kép phải là \"I\"."
            },

            {
                groupHtml: `
                    <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-book-open-reader text-indigo-500 mr-2"></i>Read the following passage and mark the correct answer to each of the following questions from 31 to 36.</h3>
                        <div class="bg-white/70 p-5 rounded-xl border border-indigo-50">
                            <p class="text-slate-700 leading-relaxed mb-3 indent-6 text-justify">
                                Language is <b class="text-indigo-800 underline">indispensable</b> to humans. It helps us share our thoughts, express our emotions, and understand one another. Without language, we wouldn't be able to build relationships or learn from others. Over time, languages have gradually developed, changing in sounds, grammar, and vocabulary. That's why the way people speak today is often very different from how their grandparents spoke.
                            </p>
                            <p class="text-slate-700 leading-relaxed mb-3 indent-6 text-justify">
                                Around the world, there are thousands of languages. Some are spoken by millions of people, while others are used by only a small group. Sadly, many of these smaller languages are disappearing. When a language dies, we also lose part of a culture and history. That's why many specialists are working hard to protect endangered languages before they are lost forever.
                            </p>
                            <p class="text-slate-700 leading-relaxed mb-3 indent-6 text-justify">
                                Not all languages are spoken with voices. Sign languages use hand movements and facial expressions to share meaning. They are used by people who are deaf or hard of hearing and are just as rich and meaningful as spoken ones.
                            </p>
                            <p class="text-slate-700 leading-relaxed indent-6 text-justify">
                                Learning another language can also help you personally. It can <b class="text-indigo-800 underline">boost</b> your self-confidence, strengthen your brain and help you understand different cultures. In today's global world, speaking more than one language can help you open doors in both life and work.
                            </p>
                        </div>
                    </div>
                `,
                id: 31, text: "Question 31. According to the passage, the word \"indispensable\" is OPPOSITE in meaning to ________.", options: ["A. uncommon", "B. unusual", "C. unavailable", "D. unimportant"], correct: 3,
                explanation: "Dựa vào mạch văn, \"indispensable\" mang nghĩa là \"không thể thiếu, vô cùng quan trọng\". Vậy TRÁI NGHĨA với nó là \"unimportant\" (không quan trọng)."
            },
            { id: 32, text: "Question 32. What is the main idea of the passage?", options: [
                "A. Language is used only for speaking with other people.",
                "B. Only major languages help people in daily situations.",
                "C. Sign languages are more useful than spoken languages.",
                "D. Language connects people and changes across history."
            ], correct: 3,
                explanation: "Đoạn văn nói về vai trò kết nối con người của ngôn ngữ (đoạn 1), sự đa dạng và biến đổi qua thời gian cũng như bảo tồn lịch sử văn hóa (đoạn 2). Đáp án D bao quát nhất các ý này."
            },
            { id: 33, text: "Question 33. What does the passage say about sign languages?", options: [
                "A. They use hands and faces to show meaning.",
                "B. They are easier to understand than grammar.",
                "C. They cannot express feelings in daily life.",
                "D. They are only used in small schools abroad."
            ], correct: 0,
                explanation: "Chi tiết nằm ở đoạn 3: \"Sign languages use hand movements and facial expressions to share meaning\" (Ngôn ngữ ký hiệu sử dụng chuyển động của tay và biểu cảm khuôn mặt để truyền đạt ý nghĩa)."
            },
            { id: 34, text: "Question 34. Which of the following is TRUE according to the passage?", options: [
                "A. The way people speak today is often the same as how their grandparents spoke.",
                "B. The way people speak today is often similar to how their grandparents spoke.",
                "C. The way people speak today often differs from how their grandparents spoke.",
                "D. The way people speak today is often like how their grandparents spoke."
            ], correct: 2,
                explanation: "Chi tiết cuối đoạn 1: \"That's why the way people speak today is often very different from how their grandparents spoke\" (Đó là lý do cách mọi người nói chuyện ngày nay thường rất khác so với cách ông bà họ từng nói)."
            },
            { id: 35, text: "Question 35. Why do a lot of experts want to protect small languages according to the passage?", options: [
                "A. Because they help people travel easily to new places.",
                "B. Because they are spoken in places with no written signs.",
                "C. Because their speakers often forget how to use them.",
                "D. Because their disappearance means losing culture and history."
            ], correct: 3,
                explanation: "Chi tiết ở đoạn 2: \"When a language dies, we also lose part of a culture and history. That's why many specialists are working hard to protect endangered languages...\" (Sự biến mất của chúng đồng nghĩa với việc mất đi văn hóa và lịch sử)."
            },
            { id: 36, text: "Question 36. According to the passage, the word \"boost\" is CLOSEST in meaning to ________.", options: ["A. lessen", "B. worsen", "C. improve", "D. reduce"], correct: 2,
                explanation: "Từ \"boost\" (thúc đẩy, tăng cường, cải thiện) GẦN NGHĨA nhất với từ \"improve\"."
            },

            // KÉO THẢ (DRAG & DROP) CHO BÀI ĐIỀN KHUYẾT CUỐI CÙNG
            {
                groupHtml: `
                    <div class="bg-indigo-50/50 p-6 sm:p-8 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden" id="q-block-37">
                        <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <div class="flex justify-between items-start mb-6 border-b border-indigo-100 pb-4">
                            <h3 class="font-bold text-indigo-900 text-base sm:text-lg leading-tight"><i class="fa-solid fa-hand-pointer text-indigo-500 mr-2"></i>Four phrases/sentences have been removed from the text below. Drag & Drop the correct option that best fits each of the numbered blanks (37-40).</h3>
                            <span class="bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm shrink-0 mt-0.5">Drag & Drop</span>
                        </div>
                        
                        <div class="bg-white p-5 sm:p-6 rounded-xl border border-indigo-50 text-slate-700 leading-loose text-justify text-[15px] sm:text-base shadow-sm mb-6">
                            Shopping is an important part of everyday life. 
                            <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors" id="drop-zone-37" data-qid="37" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 37)" onclick="handleZoneClick(37)">
                                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(37) Kéo vào đây</span>
                            </span>
                            . Some enjoy going to small local shops, while others prefer big supermarkets or modern shopping malls. In these places, shoppers can look 
                            <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors" id="drop-zone-38" data-qid="38" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 38)" onclick="handleZoneClick(38)">
                                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(38) Kéo vào đây</span>
                            </span>
                            . This is especially helpful when buying things like clothes, shoes, or furniture. Sometimes, shop assistants also give useful advice or help customers choose the right product.<br><br>
                            
                            Today, more and more people shop online. It is easy, fast, and can be done at any time from home. With just a phone or computer, buyers can look 
                            <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors" id="drop-zone-39" data-qid="39" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 39)" onclick="handleZoneClick(39)">
                                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(39) Kéo vào đây</span>
                            </span>
                            . Items are then delivered to their homes.<br><br>
                            
                            However, online shopping has some problems. 
                            <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors" id="drop-zone-40" data-qid="40" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 40)" onclick="handleZoneClick(40)">
                                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(40) Kéo vào đây</span>
                            </span>
                            . There may also be delivery delays, or the item might look different from the pictures.<br><br>
                            
                            Both online and in-person shopping have advantages, so people can choose what works best for them.
                        </div>

                        <div class="bg-indigo-50/60 p-5 rounded-xl border border-indigo-100">
                            <p class="mb-3 text-indigo-800 font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                                <i class="fa-solid fa-layer-group"></i> Kho câu trả lời (Click hoặc Kéo thả)
                            </p>
                            <div class="dnd-pool grid grid-cols-1 gap-3 min-h-[100px]" id="dnd-pool" ondragover="handleDragOver(event)" ondrop="handlePoolDrop(event)" onclick="handlePoolClick(event)">
                                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-0" data-idx="0">
                                    <span class="short-text hidden"><i class="fa-solid fa-check mr-1"></i>Đáp án A</span>
                                    <span class="full-text flex items-start"><i class="fa-solid fa-grip-vertical text-slate-300 mr-2 mt-0.5"></i><span class="text-sm font-medium text-slate-700 leading-tight"><b class="text-indigo-600 mr-1">A.</b>People cannot feel or test the product before buying it</span></span>
                                </div>
                                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-1" data-idx="1">
                                    <span class="short-text hidden"><i class="fa-solid fa-check mr-1"></i>Đáp án B</span>
                                    <span class="full-text flex items-start"><i class="fa-solid fa-grip-vertical text-slate-300 mr-2 mt-0.5"></i><span class="text-sm font-medium text-slate-700 leading-tight"><b class="text-indigo-600 mr-1">B.</b>People visit many kinds of stores to buy food, clothes, and other items</span></span>
                                </div>
                                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-2" data-idx="2">
                                    <span class="short-text hidden"><i class="fa-solid fa-check mr-1"></i>Đáp án C</span>
                                    <span class="full-text flex items-start"><i class="fa-solid fa-grip-vertical text-slate-300 mr-2 mt-0.5"></i><span class="text-sm font-medium text-slate-700 leading-tight"><b class="text-indigo-600 mr-1">C.</b>at items closely, touch them, and even try them on</span></span>
                                </div>
                                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-3" data-idx="3">
                                    <span class="short-text hidden"><i class="fa-solid fa-check mr-1"></i>Đáp án D</span>
                                    <span class="full-text flex items-start"><i class="fa-solid fa-grip-vertical text-slate-300 mr-2 mt-0.5"></i><span class="text-sm font-medium text-slate-700 leading-tight"><b class="text-indigo-600 mr-1">D.</b>through hundreds of products and order them with a few clicks</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                id: 37, isHidden: true, correct: 1,
                explanation: "Câu phía sau nhắc đến việc \"Some enjoy going to small local shops, while others prefer big supermarkets...\", vì vậy khoảng trống 37 cần một câu chủ đề khái quát về việc mọi người đến nhiều loại cửa hàng khác nhau. Đáp án B là phù hợp nhất."
            },
            { id: 38, text: "Question 38.", isHidden: true, correct: 2,
                explanation: "Cụm từ \"look at items closely\" (nhìn kĩ món đồ) ghép với phía trước \"shoppers can look...\" tạo thành một câu hoàn chỉnh về lợi ích của mua sắm trực tiếp (có thể chạm vào và thử đồ)."
            },
            { id: 39, text: "Question 39.", isHidden: true, correct: 3,
                explanation: "Đoạn 2 nói về việc mua sắm online. Cụm từ \"look through hundreds of products\" (lướt xem hàng trăm sản phẩm) phù hợp với ngữ cảnh dùng điện thoại hoặc máy tính."
            },
            { id: 40, text: "Question 40.", isHidden: true, correct: 0,
                explanation: "Đoạn 3 đề cập đến nhược điểm (problems) của mua sắm online. Câu A \"Mọi người không thể cảm nhận hoặc thử sản phẩm trước khi mua\" chính là một nhược điểm lớn nhất."
            }
        ]
    },
  "eng-hn2024-120": {
    title: "Kỳ Thi Tuyển Sinh Vào Lớp 10 THPT (2024)",
    subtitle: "Sở GD&ĐT Hà Nội • Môn: Tiếng Anh • Mã đề: 120",
    subject: "Tiếng Anh",
    timeMinutes: 60,
    questions: [
      {
        id: 1,
        groupHtml: `<div class="mt-4 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-volume-high text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the word whose underlined part differs from the other three in pronunciation in each of the following questions.</h3></div>`,
        text: "Question 1.",
        options: ["A. purpo<u class='font-bold text-indigo-600'>s</u>e", "B. surpri<u class='font-bold text-indigo-600'>s</u>e", "C. cour<u class='font-bold text-indigo-600'>s</u>e", "D. practi<u class='font-bold text-indigo-600'>s</u>e"],
        correct: 1,
        explanation: "Phần gạch chân ở đáp án B được phát âm là /z/ (/səˈpraɪz/). Các đáp án còn lại phát âm là /s/."
      },
      {
        id: 2,
        text: "Question 2.",
        options: ["A. c<u class='font-bold text-indigo-600'>o</u>mfortable", "B. p<u class='font-bold text-indigo-600'>o</u>pular", "C. h<u class='font-bold text-indigo-600'>o</u>liday", "D. pr<u class='font-bold text-indigo-600'>o</u>blem"],
        correct: 0,
        explanation: "Phần gạch chân ở đáp án A được phát âm là /ʌ/ (/ˈkʌm.fə.tə.bəl/). Các đáp án còn lại phát âm là /ɒ/."
      },
      {
        id: 3,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-book-open-reader text-indigo-500 mr-2"></i>Read the following text and mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</h3>
            
            <div class="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm text-slate-700">
              <h4 class="text-center font-black text-lg text-indigo-900 mb-4 uppercase tracking-widest border-b-2 border-slate-100 pb-2"><i class="fa-solid fa-keyboard text-slate-400 mr-2"></i>TEENTECH Forum</h4>
              
              <div class="space-y-4">
                <p class="leading-relaxed text-justify">
                  <b class="text-indigo-800">Thomson@2005:</b> I always read about teens and how much time they spend on their electronic devices. Is it a good idea for teens to have a lot of electronic devices? What do you think?
                </p>
                <p class="leading-relaxed text-justify bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <b class="text-indigo-800">Dan@14:</b> Of course it is! Having a device like a smartphone is a great way for me to contact friends and family members – especially the ones I don't see very often. I share photos and send them text messages on a messaging app all the time. I also use my laptop and my tablet to do research and improve my computer skills.
                </p>
                <p class="leading-relaxed text-justify">
                  <b class="text-indigo-800">Harrison@008:</b> Electronic devices can have some negative effects on teens. I had a tablet, a smartphone and a games console. I spent too much time playing video games and going on social media. My parents said it would reduce my <b class="underline">attention span</b> and make me lack social skills. My doctor told me I was gaining weight, too. Now, I just have a smartphone and I only use it after I finish my homework. I'm glad I stopped wasting so much time on electronic devices.
                </p>
              </div>
            </div>
          </div>
        `,
        text: "Question 3. What is the main topic of the forum discussion?",
        options: [
          "A. Several benefits of social media for teenagers.",
          "B. Some effects of electronic devices on teens.",
          "C. Different ways to improve computer skills.",
          "D. Different ways to contact friends and family members."
        ],
        correct: 1,
        explanation: "Bài đọc nói về cả mặt tích cực (Dan@14) và tiêu cực (Harrison@008) của các thiết bị điện tử đối với thanh thiếu niên. Do đó, đáp án B (Một số tác động của thiết bị điện tử đối với thanh thiếu niên) là chủ đề chính."
      },
      {
        id: 4,
        text: "Question 4. Why does Dan@14 believe it's good for teens to have electronic devices?",
        options: [
          "A. Because he can improve his social skills by making friends with new people.",
          "B. Because he can play video games on the screen all the time.",
          "C. Because he can gain weight and finish his homework.",
          "D. Because he can stay connected with friends and relatives and better his computer skills."
        ],
        correct: 3,
        explanation: "Trong bài, Dan viết: \"...contact friends and family members...\" và \"...improve my computer skills.\". Đáp án D tóm tắt chính xác hai ý này."
      },
      {
        id: 5,
        text: "Question 5. Where does Dan@14 share photos and send messages?",
        options: [
          "A. On a games console.",
          "B. On a computer website.",
          "C. On a messaging app.",
          "D. On TeenTech forum."
        ],
        correct: 2,
        explanation: "Chi tiết trong bài: \"I share photos and send them text messages on a messaging app all the time.\" (Tôi chia sẻ ảnh và gửi tin nhắn văn bản trên một ứng dụng nhắn tin mọi lúc)."
      },
      {
        id: 6,
        text: "Question 6. How does Harrison@008 change his habits of using electronic devices?",
        options: [
          "A. He completely stops using electronic devices.",
          "B. He spends most of his time playing video games on social media.",
          "C. He starts using more types of electronic devices.",
          "D. He only uses his smartphone after finishing his homework."
        ],
        correct: 3,
        explanation: "Chi tiết trong bài: \"Now, I just have a smartphone and I only use it after I finish my homework.\" (Bây giờ, tôi chỉ có một chiếc điện thoại thông minh và tôi chỉ sử dụng nó sau khi làm xong bài tập)."
      },
      {
        id: 7,
        text: "Question 7. The phrase 'attention span' in the text probably means ________.",
        options: [
          "A. the ability someone can remember",
          "B. the period of time someone can focus",
          "C. the learning style someone can choose",
          "D. the learning method someone can use"
        ],
        correct: 1,
        explanation: "Cụm từ \"attention span\" có nghĩa là khoảng thời gian tập trung (the period of time someone can focus)."
      },
      {
        id: 8,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-comments text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the most suitable response to complete each of the following exchanges.</h3></div>`,
        text: `Question 8. Thanh: \"What does this sign say, Emma?\"<br>Emma: \"________\"
          <div class="bg-white border-2 border-slate-800 rounded p-3 mx-auto my-4 w-fit shadow-sm flex items-center">
            <div class="border-[3px] border-slate-800 rounded-lg px-4 py-2 flex flex-col items-center">
              <div class="font-black text-xs text-center uppercase tracking-wide text-slate-800 mb-2">At the<br>playground</div>
              <div class="flex items-center justify-center gap-2 text-slate-800 mb-2 px-2">
                <i class="fa-solid fa-person-dress text-2xl"></i>
                <i class="fa-solid fa-eye text-3xl"></i>
                <i class="fa-solid fa-child text-xl mt-2"></i>
              </div>
              <div class="font-black text-[9px] text-center uppercase tracking-wide text-slate-800">Keep a close watch<br>on your kids</div>
            </div>
          </div>`,
        options: [
          "A. Adults should watch their kids carefully at the playground.",
          "B. You can let your kids play on their own at the playground.",
          "C. Kids need to keep a close watch on their parents.",
          "D. You can relax while your kids are playing at the playground."
        ],
        correct: 0,
        explanation: "Biển báo ghi \"Keep a close watch on your kids\" (Hãy theo dõi sát sao trẻ em của bạn). Lời giải thích hợp lý nhất là người lớn nên trông chừng trẻ cẩn thận tại sân chơi (Adults should watch their kids carefully)."
      },
      {
        id: 9,
        text: "Question 9. Mike: \"I've just got awarded a scholarship!\"<br>Chi: \"________\"",
        options: [
          "A. My pleasure.",
          "B. No worries. Everything will be alright.",
          "C. How cool! Congratulations!",
          "D. Thanks for your advice."
        ],
        correct: 2,
        explanation: "Khi ai đó báo tin vui (nhận được học bổng), ta nên dùng lời chúc mừng: \"How cool! Congratulations!\" (Thật tuyệt! Chúc mừng nhé!)."
      },
      {
        id: 10,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-microphone-lines text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the word that differs from the other three in the position of the primary stress.</h3></div>`,
        text: "Question 10.",
        options: ["A. limitation", "B. activity", "C. emotional", "D. environment"],
        correct: 0,
        explanation: "Từ \"limitation\" có trọng âm nhấn vào âm tiết thứ 3 (/ˌlɪm.ɪˈteɪ.ʃən/). Các từ còn lại có trọng âm nhấn vào âm tiết thứ 2."
      },
      {
        id: 11,
        text: "Question 11.",
        options: ["A. pollution", "B. unlucky", "C. volunteer", "D. historic"],
        correct: 2,
        explanation: "Từ \"volunteer\" có trọng âm nhấn vào âm tiết thứ 3 (/ˌvɒl.ənˈtɪər/). Các từ còn lại có trọng âm nhấn vào âm tiết thứ 2."
      },
      {
        id: 12,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-circle-check text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the best answer to each of the following questions.</h3></div>`,
        text: "Question 12. The students are looking forward ________ a break after their exams.",
        options: ["A. having", "B. to having", "C. will have", "D. to have"],
        correct: 1,
        explanation: "Cấu trúc mong đợi điều gì đó: \"look forward to + V-ing/Noun\". Do đó ta chọn \"to having\"."
      },
      {
        id: 13,
        text: "Question 13. Last weekend, their family enjoyed a picnic lunch ________ the river bank.",
        options: ["A. next", "B. between", "C. in", "D. on"],
        correct: 3,
        explanation: "Cụm từ chỉ địa điểm: \"on the river bank\" (trên bờ sông)."
      },
      {
        id: 14,
        text: "Question 14. It's the first time our children ________ their own pottery in a workshop.",
        options: ["A. have made", "B. to make", "C. made", "D. had made"],
        correct: 0,
        explanation: "Cấu trúc \"It is the first/second... time + S + V(hiện tại hoàn thành)\" diễn tả trải nghiệm lần đầu tiên làm việc gì."
      },
      {
        id: 15,
        text: "Question 15. I wish I ________ a chance to take a photography class next school year.",
        options: ["A. had had", "B. having", "C. have had", "D. could have"],
        correct: 3,
        explanation: "Câu điều ước ở tương lai (nhận biết qua \"next school year\") dùng cấu trúc: S + wish + S + could/would + V(nguyên thể)."
      },
      {
        id: 16,
        text: "Question 16. Do you think flashcards can help us learn English ________?",
        options: ["A. more effective", "B. as effectively", "C. more effectively", "D. so effective"],
        correct: 2,
        explanation: "Động từ chính là \"learn\" (động từ thường) nên cần một trạng từ bổ nghĩa. Ở đây mang ý so sánh hơn nên dùng \"more effectively\" (hiệu quả hơn)."
      },
      {
        id: 17,
        text: "Question 17. If he ________ a few years younger, I'm sure he would get the job.",
        options: ["A. were", "B. will be", "C. would be", "D. is"],
        correct: 0,
        explanation: "Đây là câu điều kiện loại 2 diễn tả điều không có thật ở hiện tại. Mệnh đề if dùng thì quá khứ đơn, động từ tobe thường chia là \"were\" cho mọi ngôi."
      },
      {
        id: 18,
        text: "Question 18. There's ________ of information available on the internet about the IELTS tests.",
        options: ["A. few", "B. no", "C. many", "D. a lot"],
        correct: 3,
        explanation: "Từ \"information\" là danh từ không đếm được. Ta dùng cụm \"a lot of\" (nhiều). Các từ \"few\", \"many\" dùng cho danh từ đếm được số nhiều."
      },
      {
        id: 19,
        text: "Question 19. The tour guide asked the tourists ________ heavy bags when hiking in the mountain.",
        options: ["A. didn't bring", "B. not to bring", "C. not bringing", "D. not brought"],
        correct: 1,
        explanation: "Cấu trúc câu gián tiếp dạng mệnh lệnh/yêu cầu: \"ask someone (not) to do something\" (yêu cầu ai đó (không) làm gì)."
      },
      {
        id: 20,
        text: "Question 20. Wellington, ________ is the capital city of New Zealand, is famous for its stunning natural landscapes and beautiful harbour views.",
        options: ["A. that", "B. which", "C. where", "D. what"],
        correct: 1,
        explanation: "Cần một đại từ quan hệ thay thế cho danh từ chỉ vật \"Wellington\" và đóng vai trò chủ ngữ trong mệnh đề quan hệ không xác định (có dấu phẩy). Dùng \"which\" là chính xác (không dùng \"that\" sau dấu phẩy)."
      },
      {
        id: 21,
        text: "Question 21. In my opinion, stories about faraway lands are always ________.",
        options: ["A. amaze", "B. amazingly", "C. amazed", "D. amazing"],
        correct: 3,
        explanation: "Sau động từ tobe \"are\" cần một tính từ. Vì chủ ngữ là \"stories\" (sự vật gây ra tính chất) nên ta dùng tính từ đuôi -ing: \"amazing\"."
      },
      {
        id: 22,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-arrows-left-right-to-line text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the word(s) OPPOSITE in meaning to the underlined word(s).</h3></div>`,
        text: "Question 22. Lien was <u class='font-bold text-indigo-700'>over the moon</u> when she became the leader of her school DIY club.",
        options: ["A. surprised", "B. delighted", "C. satisfied", "D. depressed"],
        correct: 3,
        explanation: "Thành ngữ \"over the moon\" nghĩa là rất sung sướng, hạnh phúc. Trái nghĩa với nó là \"depressed\" (buồn bã, chán nản)."
      },
      {
        id: 23,
        text: "Question 23. The city council has decided to <u class='font-bold text-indigo-700'>pull down</u> a number of unsafe old buildings in the centre.",
        options: ["A. turn up", "B. set up", "C. cheer up", "D. give up"],
        correct: 1,
        explanation: "Cụm động từ \"pull down\" nghĩa là phá bỏ, kéo sập (tòa nhà). Trái nghĩa với nó là \"set up\" (xây dựng, thiết lập)."
      },
      {
        id: 24,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-link text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the word(s) CLOSEST in meaning to the underlined word(s).</h3></div>`,
        text: "Question 24. Some children get a lot of <u class='font-bold text-indigo-700'>pleasure</u> from doing jigsaw puzzles.",
        options: ["A. fun", "B. participation", "C. experience", "D. improvement"],
        correct: 0,
        explanation: "Từ \"pleasure\" nghĩa là niềm vui, sự thích thú. Đồng nghĩa với nó là \"fun\"."
      },
      {
        id: 25,
        text: "Question 25. Sitting around can get boring. <u class='font-bold text-indigo-700'>To begin with</u>, let's explore some fun hobbies we can try!",
        options: ["A. First of all", "B. In the end", "C. To give advice", "D. In fact"],
        correct: 0,
        explanation: "Cụm từ \"To begin with\" nghĩa là đầu tiên, trước hết. Đồng nghĩa với nó là \"First of all\"."
      },
      {
        id: 26,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-file-pen text-indigo-500 mr-2"></i>Read the following text and mark the letter A, B, C or D on your answer sheet to indicate the correct word or phrase that best fits each of the numbered blanks.</h3>
            
            <div class="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm text-slate-700">
              <h4 class="text-center font-black text-xl text-indigo-900 mb-6 uppercase tracking-widest">INTENSIVE ENGLISH COURSE</h4>
              
              <div class="space-y-2 mb-4 text-[15px] font-medium border-b border-indigo-50 pb-4">
                <p><i class="fa-solid fa-location-dot text-indigo-400 w-5"></i> Location: Bibury School, Malvern School, Trent College</p>
                <p><i class="fa-regular fa-calendar-days text-indigo-400 w-5"></i> Dates: 30th June – 25th August 2024</p>
                <p><i class="fa-solid fa-user-graduate text-indigo-400 w-5"></i> Ages: 7 – 18 years old</p>
              </div>

              <div class="mb-4">
                <b class="text-indigo-800 text-lg block mb-2">Overview:</b>
                <p class="leading-relaxed text-justify indent-6">
                  Welcome to our Intensive English Programme – the perfect choice for students looking to achieve specific language learning goals and <b class="text-indigo-700">(26) ________</b> rapid progress in their English proficiency! Our Intensive English Programme offers an additional 12 hours of English language instruction per week on top of our regular <b class="text-indigo-700">(27) ________</b> English course. These extra classes are held in small groups of three or four, allowing for a personalised learning experience that is tailored to <b class="text-indigo-700">(28) ________</b> student's individual needs.
                </p>
              </div>

              <div>
                <b class="text-indigo-800 text-lg block mb-2">Highlights:</b>
                <ul class="list-none space-y-2 pl-2">
                  <li class="flex items-center gap-2"><i class="fa-solid fa-star text-[10px] text-indigo-400"></i> Residential accommodation</li>
                  <li class="flex items-center gap-2"><i class="fa-solid fa-star text-[10px] text-indigo-400"></i> Full-board</li>
                  <li class="flex items-center gap-2"><i class="fa-solid fa-star text-[10px] text-indigo-400"></i> 12 hours of intensive English <b class="text-indigo-700">(29) ________</b> small groups</li>
                  <li class="flex items-center gap-2"><i class="fa-solid fa-star text-[10px] text-indigo-400"></i> A variety of indoor and outdoor <b class="text-indigo-700">(30) ________</b></li>
                  <li class="flex items-center gap-2"><i class="fa-solid fa-star text-[10px] text-indigo-400"></i> Two excursions per week</li>
                </ul>
              </div>
            </div>
          </div>
        `,
        text: "Question 26.",
        options: ["A. finish", "B. work", "C. make", "D. run"],
        correct: 2,
        explanation: "Collocation: \"make progress\" có nghĩa là tiến bộ. Cụm \"make rapid progress\" nghĩa là tiến bộ nhanh chóng."
      },
      {
        id: 27,
        text: "Question 27.",
        options: ["A. 15 hours", "B. 15's hour", "C. 15-hour", "D. 15-hours"],
        correct: 2,
        explanation: "Sử dụng tính từ ghép tạo bởi số đếm và danh từ số ít (được nối bằng dấu gạch ngang) để bổ nghĩa cho danh từ phía sau: \"15-hour English course\" (khóa học tiếng Anh kéo dài 15 giờ)."
      },
      {
        id: 28,
        text: "Question 28.",
        options: ["A. both", "B. each", "C. none", "D. all"],
        correct: 1,
        explanation: "Từ \"student\" ở dạng số ít nên ta dùng \"each\" (mỗi). \"all\" và \"both\" đi với danh từ số nhiều."
      },
      {
        id: 29,
        text: "Question 29.",
        options: ["A. in", "B. under", "C. along", "D. up"],
        correct: 0,
        explanation: "Giới từ \"in\" được dùng để chỉ việc học tập trong các nhóm nhỏ: \"in small groups\"."
      },
      {
        id: 30,
        text: "Question 30.",
        options: ["A. possibilities", "B. difficulties", "C. activities", "D. abilities"],
        correct: 2,
        explanation: "Dựa vào ngữ cảnh khóa học, các bạn sẽ tham gia đa dạng các \"hoạt động\" trong nhà và ngoài trời -> \"activities\"."
      },
      {
        id: 31,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-code-compare text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the sentence that is closest in meaning to the original sentence.</h3></div>`,
        text: "Question 31. Her son said he was in the school canteen then.",
        options: [
          "A. \"I'm in the school canteen then\", her son said.",
          "B. \"He was in the school canteen now\", her son said.",
          "C. \"I'm in the school canteen now\", her son said.",
          "D. \"He is in the school canteen then\", her son said."
        ],
        correct: 2,
        explanation: "Chuyển từ câu gián tiếp sang trực tiếp: Lùi thì ngược lại (was -> am), đổi đại từ (he -> I), đổi trạng từ thời gian (then -> now)."
      },
      {
        id: 32,
        text: "Question 32. Unless people take action to protect the environment, climate change will be worse.",
        options: [
          "A. If people didn't take action to protect the environment, climate change would have worse.",
          "B. If people took action to protect the environment, climate change were worse.",
          "C. If people don't take action to protect the environment, climate change will be worse.",
          "D. If people don't take action to protect the environment, climate change would be worse."
        ],
        correct: 2,
        explanation: "Cấu trúc \"Unless + mệnh đề khẳng định\" tương đương với \"If + mệnh đề phủ định\" (Nếu không...). \"Unless people take action...\" = \"If people don't take action...\"."
      },
      {
        id: 33,
        text: "Question 33. People think that reading can improve our imagination and creativity.",
        options: [
          "A. Reading is thought improving our imagination and creativity.",
          "B. It is thought that reading can improve our imagination and creativity.",
          "C. It is thought that reading to improve our imagination and creativity.",
          "D. Reading is thought that can improve our imagination and creativity."
        ],
        correct: 1,
        explanation: "Cấu trúc bị động khách quan: \"People think that + clause\" -> \"It is thought that + clause\"."
      },
      {
        id: 34,
        text: "Question 34. Minh made more spelling mistakes than I did.",
        options: [
          "A. I made less spelling mistakes than Minh did.",
          "B. I didn't make more spelling mistakes as Minh did.",
          "C. I didn't make as much spelling mistakes as Minh did.",
          "D. I didn't make as many spelling mistakes as Minh did."
        ],
        correct: 3,
        explanation: "Câu gốc: Minh mắc nhiều lỗi chính tả hơn tôi. -> Chuyển sang so sánh bằng (phủ định): Tôi không mắc nhiều lỗi chính tả như Minh (didn't make as many... as). Dùng \"many\" vì mistakes đếm được."
      },
      {
        id: 35,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-magnifying-glass-chart text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the underlined part that needs correction.</h3></div>`,
        text: "Question 35. Thu Hien <u class='font-bold text-indigo-700'>has played</u> <u class='font-bold text-indigo-700'>a saxophone</u> since she <u class='font-bold text-indigo-700'>was</u> only 10 years old.",
        options: ["A. has played", "B. was", "C. a saxophone", "D. since"],
        correct: 2,
        explanation: "Khi nói về việc chơi một loại nhạc cụ, ta phải dùng mạo từ \"the\" thay vì \"a/an\". Sửa \"a saxophone\" thành \"the saxophone\"."
      },
      {
        id: 36,
        text: "Question 36. I haven't made <u class='font-bold text-indigo-700'>in</u> my mind <u class='font-bold text-indigo-700'>yet</u> on how <u class='font-bold text-indigo-700'>to celebrate</u> <u class='font-bold text-indigo-700'>my parents'</u> wedding anniversary.",
        options: ["A. yet", "B. in", "C. my parents'", "D. to celebrate"],
        correct: 1,
        explanation: "Thành ngữ: \"make up one's mind\" (quyết định). Do đó giới từ \"in\" là sai, cần sửa thành \"up\"."
      },
      {
        id: 37,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-wrench text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the sentence that is best written from the given cues.</h3></div>`,
        text: "Question 37. Khanh/ have/ take/ a course/ improve/ English?",
        options: [
          "A. Khanh had to take a course to improve of her English, wouldn't she?",
          "B. Khanh had to take a course to improve her English, hadn't she?",
          "C. Khanh had to take a course to improve her English, didn't she?",
          "D. Khanh had to take a course improving her English, wasn't she?"
        ],
        correct: 2,
        explanation: "Động từ chính là \"had to take\" (thì Quá khứ đơn của have to), do đó phần câu hỏi đuôi phải mượn trợ động từ quá khứ là \"didn't she\"."
      },
      {
        id: 38,
        text: "Question 38. It/ nice/ you/ give/ useful/ advice.",
        options: [
          "A. It is nice of you to give me such useful advice.",
          "B. It is nice of you giving me such useful advice.",
          "C. It is nice of you to give me a useful advice.",
          "D. It is nice of you giving me an useful advice."
        ],
        correct: 0,
        explanation: "Cấu trúc: \"It is + adj + of sb + to V\" (Thật tốt/tử tế khi ai đó làm gì). Danh từ \"advice\" (lời khuyên) là danh từ không đếm được nên không dùng mạo từ \"a/an\" ở trước."
      },
      {
        id: 39,
        text: "Question 39. You/ should/ go/ bus/ instead/ car/ because/ its environmental benefits.",
        options: [
          "A. You should going by bus instead by car because of its environmental benefits.",
          "B. You should go by bus instead of by car because of its environmental benefits.",
          "C. You should go by bus instead of by car because its environmental benefits.",
          "D. You should to go by bus instead of by car because of its environmental benefits."
        ],
        correct: 1,
        explanation: "Sau \"should\" là động từ nguyên thể (go). Đi lại bằng phương tiện gì dùng \"by + phương tiện\". Thay vì dùng \"instead of\". \"its environmental benefits\" là một cụm danh từ nên phải dùng \"because of\" thay vì \"because\"."
      },
      {
        id: 40,
        text: "Question 40. Most/ our classmates/ find/ TV game shows / enjoyable/ interesting.",
        options: [
          "A. Most in our classmates find these TV game shows enjoyable and interesting.",
          "B. Most in our classmates find these TV game shows enjoyable but interesting.",
          "C. Most of our classmates finds these TV game shows are enjoyable and interesting.",
          "D. Most of our classmates find these TV game shows enjoyable and interesting."
        ],
        correct: 3,
        explanation: "Cấu trúc: \"Most of + đại từ sở hữu/the + N\" (Hầu hết). Cấu trúc: \"find + O + adj\" (thấy cái gì đó như thế nào). Chủ ngữ là số nhiều nên động từ \"find\" giữ nguyên."
      }
    ]
  },
  "eng-hn2023-023": {
    title: "Kỳ Thi Tuyển Sinh Vào Lớp 10 THPT (2023)",
    subtitle: "Sở GD&ĐT Hà Nội • Môn: Tiếng Anh • Mã đề: 023",
    subject: "Tiếng Anh",
    timeMinutes: 60,
    questions: [
      {
        id: 1,
        groupHtml: `<div class="mt-4 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-arrows-left-right-to-line text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the word OPPOSITE in meaning to the underlined word in each of the following questions.</h3></div>`,
        text: "Question 1. We need to find ways of producing energy without <u class='font-bold text-indigo-700'>destroying</u> the environment.",
        options: ["A. changing", "B. damaging", "C. harming", "D. preserving"],
        correct: 3,
        explanation: "Từ \"destroying\" (phá hủy) TRÁI NGHĨA với \"preserving\" (bảo tồn, gìn giữ).<br><b>* Từ vựng mở rộng:</b><br>- damage / harm (v): làm hỏng, gây hại.<br>- preserve (v): bảo tồn."
      },
      {
        id: 2,
        text: "Question 2. I'm <u class='font-bold text-indigo-700'>available</u> this afternoon, so we can meet up then.",
        options: ["A. ready", "B. busy", "C. free", "D. tired"],
        correct: 1,
        explanation: "Từ \"available\" (rảnh rỗi, có mặt) TRÁI NGHĨA với \"busy\" (bận rộn). Các đáp án khác: ready (sẵn sàng), free (tự do/rảnh - đồng nghĩa), tired (mệt mỏi)."
      },
      {
        id: 3,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-volume-high text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the word whose underlined part is pronounced differently from that of the rest in each of the following questions.</h3></div>`,
        text: "Question 3.",
        options: ["A. leave<u class='font-bold text-indigo-600'>s</u>", "B. cook<u class='font-bold text-indigo-600'>s</u>", "C. stay<u class='font-bold text-indigo-600'>s</u>", "D. sing<u class='font-bold text-indigo-600'>s</u>"],
        correct: 1,
        explanation: "Phần gạch chân ở đáp án B được phát âm là /s/ do tận cùng bằng âm vô thanh /k/. Các đáp án còn lại phát âm là /z/."
      },
      {
        id: 4,
        text: "Question 4.",
        options: ["A. s<u class='font-bold text-indigo-600'>ou</u>nd", "B. t<u class='font-bold text-indigo-600'>ou</u>ch", "C. c<u class='font-bold text-indigo-600'>ou</u>nt", "D. ab<u class='font-bold text-indigo-600'>ou</u>t"],
        correct: 1,
        explanation: "Phần gạch chân ở đáp án B được phát âm là /ʌ/ (/tʌtʃ/). Các từ còn lại phát âm là /aʊ/ (sound, count, about).<br><b>* Từ vựng mở rộng:</b><br>- count (v): đếm."
      },
      {
        id: 5,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-circle-check text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the correct answer to each of the following questions.</h3></div>`,
        text: "Question 5. If everybody ________ traffic rules, roads will be much safer.",
        options: ["A. to obey", "B. obeys", "C. had obeyed", "D. obeyed"],
        correct: 1,
        explanation: "Câu điều kiện loại 1 (nhận biết qua \"will be\"). Mệnh đề If chia ở hiện tại đơn. Đại từ bất định \"everybody\" đi với động từ số ít nên dùng \"obeys\".<br><b>* Từ vựng mở rộng:</b><br>- obey (v): tuân thủ, vâng lời."
      },
      {
        id: 6,
        text: "Question 6. He used ________ for the national football team when he was young.",
        options: ["A. to be played", "B. to playing", "C. to play", "D. to be playing"],
        correct: 2,
        explanation: "Cấu trúc diễn tả thói quen hoặc hành động thường làm trong quá khứ: \"used to + V (nguyên thể)\" (đã từng làm gì)."
      },
      {
        id: 7,
        text: "Question 7. The guard asked the children ________ in the 1.8-meter zone.",
        options: ["A. do not swim", "B. to not swim", "C. did not swim", "D. not to swim"],
        correct: 3,
        explanation: "Cấu trúc câu gián tiếp mang tính yêu cầu: \"ask someone (not) to do something\" (yêu cầu ai đó (không) làm gì).<br><b>* Từ vựng mở rộng:</b><br>- guard (n): bảo vệ, người canh gác."
      },
      {
        id: 8,
        text: "Question 8. ________ the hand-embroidered picture was very expensive, we decided to buy it.",
        options: ["A. So", "B. Although", "C. Therefore", "D. Despite"],
        correct: 1,
        explanation: "Hai mệnh đề mang ý nghĩa tương phản (bức tranh đắt tiền - nhưng vẫn quyết định mua). Phía sau là một mệnh đề (S + V) nên dùng liên từ \"Although\" (Mặc dù).<br><b>* Từ vựng mở rộng:</b><br>- hand-embroidered (adj): được thêu bằng tay."
      },
      {
        id: 9,
        text: "Question 9. Learning a new language can be one of the ________ challenging things you should try.",
        options: ["A. more", "B. most", "C. much", "D. as"],
        correct: 1,
        explanation: "Cấu trúc \"one of the + so sánh nhất\" (một trong những... nhất). Từ \"challenging\" là tính từ dài nên dùng \"the most challenging\"."
      },
      {
        id: 10,
        text: "Question 10. The light suddenly went out while I ________ dinner with my family.",
        options: ["A. am having", "B. have had", "C. had", "D. was having"],
        correct: 3,
        explanation: "Hành động đang xảy ra trong quá khứ thì có hành động khác xen vào. Hành động đang xảy ra (ăn tối) chia thì Quá khứ tiếp diễn (was having), hành động xen vào (cúp điện - went out) chia thì Quá khứ đơn."
      },
      {
        id: 11,
        text: "Question 11. We should take action to prevent the Covid-19 pandemic ________ spreading.",
        options: ["A. about", "B. by", "C. from", "D. with"],
        correct: 2,
        explanation: "Cấu trúc cố định: \"prevent sb/sth from V-ing\" (ngăn chặn ai/cái gì khỏi việc làm gì).<br><b>* Từ vựng mở rộng:</b><br>- prevent (v): ngăn chặn.<br>- spread (v): lây lan."
      },
      {
        id: 12,
        text: "Question 12. I would like ________ a birthday cake with roses on top for my mother.",
        options: ["A. bought", "B. buying", "C. buy", "D. to buy"],
        correct: 3,
        explanation: "Cấu trúc: \"would like + to V\" diễn tả mong muốn làm gì một cách lịch sự (tôi muốn mua...)."
      },
      {
        id: 13,
        text: "Question 13. I wish I ________ all the natural and man-made wonders of Viet Nam.",
        options: ["A. can visit", "B. could visit", "C. visit", "D. will visit"],
        correct: 1,
        explanation: "Câu điều ước loại 2 diễn tả điều ước trái với thực tế ở hiện tại hoặc tương lai: \"S + wish + S + could/would + V\".<br><b>* Từ vựng mở rộng:</b><br>- man-made wonder (n): kỳ quan nhân tạo."
      },
      {
        id: 14,
        text: "Question 14. He laughs ________ whenever he watches the cartoon \"Tom and Jerry\" on TV.",
        options: ["A. happy", "B. happily", "C. unhappy", "D. happiness"],
        correct: 1,
        explanation: "Sau động từ thường \"laughs\" (cười), ta cần một trạng từ để bổ nghĩa cho động từ đó. Trạng từ của happy là \"happily\" (một cách vui vẻ)."
      },
      {
        id: 15,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-comments text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the most suitable response to complete each of the following exchanges.</h3></div>`,
        text: "Question 15. - Nick: \"Why don't we try that new Italian restaurant?\"<br>- Phuong: \"________\"",
        options: ["A. That sounds good.", "B. You did a good job!", "C. I'm glad to tell you so.", "D. You're well done!"],
        correct: 0,
        explanation: "Câu nói của Nick là một lời rủ rê/đề nghị (\"Why don't we...\" - Tại sao chúng ta không...). Cách đáp lại đồng tình phổ biến nhất là \"That sounds good.\" (Nghe hay đấy)."
      },
      {
        id: 16,
        text: "Question 16. - John: \"You won the 100-meter race this morning. Congratulations!\"<br>- Lan: \"________\"",
        options: ["A. I'm afraid I can't.", "B. You're welcome.", "C. Oh, because I ran slowly.", "D. Thank you. It's very encouraging."],
        correct: 3,
        explanation: "Đáp lại lời chúc mừng (Congratulations!), ta dùng lời cảm ơn. \"Thank you. It's very encouraging.\" (Cảm ơn bạn. Điều đó rất đáng khích lệ).<br><b>* Từ vựng mở rộng:</b><br>- encouraging (adj): mang tính khích lệ, động viên."
      },
      {
        id: 17,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-microphone-lines text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the word that differs from the other three in the position of the primary stress in each of the following questions.</h3></div>`,
        text: "Question 17.",
        options: ["A. embroider", "B. tradition", "C. historic", "D. tropical"],
        correct: 3,
        explanation: "Từ \"tropical\" có trọng âm rơi vào âm tiết 1 (/ˈtrɒp.ɪ.kəl/). Các từ còn lại trọng âm rơi vào âm tiết 2: embroider (/ɪmˈbrɔɪ.dər/), tradition (/trəˈdɪʃ.ən/), historic (/hɪˈstɒr.ɪk/)."
      },
      {
        id: 18,
        text: "Question 18.",
        options: ["A. arrange", "B. expect", "C. follow", "D. complete"],
        correct: 2,
        explanation: "Từ \"follow\" có trọng âm rơi vào âm tiết 1 (/ˈfɒl.əʊ/). Các động từ còn lại có 2 âm tiết và trọng âm rơi vào âm 2: arrange (/əˈreɪndʒ/), expect (/ɪkˈspekt/), complete (/kəmˈpliːt/)."
      },
      {
        id: 19,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-link text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the word CLOSEST in meaning to the underlined word(s) in each of the following questions.</h3></div>`,
        text: "Question 19. Teenagers should learn how to cope with negative <u class='font-bold text-indigo-700'>emotions</u> such as fear and jealousy.",
        options: ["A. ideas", "B. opinions", "C. feelings", "D. behaviours"],
        correct: 2,
        explanation: "Từ \"emotions\" (cảm xúc) ĐỒNG NGHĨA với \"feelings\".<br><b>* Từ vựng mở rộng:</b><br>- cope with (v): đối phó, đương đầu.<br>- jealousy (n): sự ghen tị."
      },
      {
        id: 20,
        text: "Question 20. The famous series \"Harry Potter\" <u class='font-bold text-indigo-700'>consists of</u> seven books.",
        options: ["A. has", "B. makes", "C. produces", "D. divides"],
        correct: 0,
        explanation: "Cụm động từ \"consist of\" (bao gồm) mang nghĩa tương đương với \"have\" (có) trong ngữ cảnh này: Seri Harry Potter có/bao gồm 7 cuốn sách."
      },
      {
        id: 21,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-book-open-reader text-indigo-500 mr-2"></i>Read the passage and mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the following questions.</h3>
            
            <div class="bg-white p-5 rounded-xl border border-indigo-50 text-slate-700">
              <p class="leading-relaxed text-justify mb-3 indent-6">
                Being overshadowed by Ha Long Bay to the north, Cat Ba Island is often left out of the itineraries of the majority of travellers coming to Viet Nam. Nevertheless, Cat Ba Island is one of the most attractive destinations in Viet Nam.
              </p>
              <p class="leading-relaxed text-justify mb-3 indent-6">
                The massive island of Cat Ba is a fantastic destination for ecotourism and adventure activities in Northern Viet Nam. Cat Ba National Park, which was established on 31<sup>st</sup> March 1986, is one of the most ecologically diverse national parks in Viet Nam. The park possesses seven different ecosystems, both underwater and inland. It is home to thirty-two types of mammals, along with seventy bird species, and more than a thousand species of plants, hundreds of which can be used as medicines.
              </p>
              <p class="leading-relaxed text-justify indent-6">
                There are several different hiking and trekking routes through rugged and forested mountains within Cat Ba National Park. These routes are also categorized according to different types of trekking, so travellers don't have to be worried if they don't have a high level of physical fitness. In addition, travellers can take a side visit to explore the <u class="text-indigo-800 font-medium">exquisite</u> Trung Trang cave or discover the traditional village of Viet Hai.
              </p>
            </div>
          </div>
        `,
        text: "Question 21. Why isn't Cat Ba Island chosen in the itineraries of the majority of travellers coming to Viet Nam?",
        options: [
          "A. Because there is too much rain there.",
          "B. Because it is too far from Ha Long Bay.",
          "C. Because it is not a good destination for tourism.",
          "D. Because it is overshadowed by Ha Long Bay."
        ],
        correct: 3,
        explanation: "Dựa vào câu đầu tiên của bài đọc: \"Being overshadowed by Ha Long Bay to the north, Cat Ba Island is often left out of the itineraries...\" (Bởi vì bị lu mờ bởi Vịnh Hạ Long ở phía bắc...).<br><b>* Từ vựng mở rộng:</b><br>- overshadow (v): làm lu mờ.<br>- itinerary (n): lịch trình chuyến đi."
      },
      {
        id: 22,
        text: "Question 22. Cat Ba Island is a wonderful place and suitable for ________.",
        options: [
          "A. experiencing urban life",
          "B. ecotourism and adventure activities in the north of Viet Nam",
          "C. scientific research and exploration",
          "D. many indoor activities"
        ],
        correct: 1,
        explanation: "Dựa vào câu đầu đoạn 2: \"The massive island of Cat Ba is a fantastic destination for ecotourism and adventure activities in Northern Viet Nam.\"."
      },
      {
        id: 23,
        text: "Question 23. Cat Ba National Park is home to thirty-two species of ________.",
        options: ["A. birds", "B. mammals", "C. medicines", "D. plants"],
        correct: 1,
        explanation: "Dựa vào chi tiết ở cuối đoạn 2: \"It is home to thirty-two types of mammals...\" (Nơi đây là nhà của 32 loài động vật có vú...).<br><b>* Từ vựng mở rộng:</b><br>- mammal (n): động vật có vú."
      },
      {
        id: 24,
        text: "Question 24. The word \"exquisite\" in the passage is closest in meaning to ________.",
        options: ["A. ugly", "B. beautiful", "C. plain", "D. quiet"],
        correct: 1,
        explanation: "Từ \"exquisite\" mang nghĩa là tuyệt đẹp, tinh tế. Đồng nghĩa với \"beautiful\".<br><b>* Từ vựng mở rộng:</b><br>- plain (adj): trơn, giản dị, không họa tiết."
      },
      {
        id: 25,
        text: "Question 25. Which of the following statements is NOT true about Cat Ba National Park according to the passage?",
        options: [
          "A. Hiking and trekking in Cat Ba National Park require a high level of fitness.",
          "B. It was set up in 1986.",
          "C. It is one of the most ecologically diverse national parks in Viet Nam.",
          "D. There are seven different ecosystems in Cat Ba National Park."
        ],
        correct: 0,
        explanation: "Câu A là SAI vì trong đoạn 3 có ghi: \"travellers don't have to be worried if they don't have a high level of physical fitness\" (du khách không phải lo lắng nếu họ không có mức thể lực cao). Nghĩa là nó không yêu cầu (\"require\") mức thể lực cao."
      },
      {
        id: 26,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-file-pen text-indigo-500 mr-2"></i>Read the passage and mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the following questions.</h3>
            
            <div class="bg-white p-5 rounded-xl border border-indigo-50 text-slate-700 leading-relaxed text-justify">
              <p class="mb-3 indent-6">
                Hung King Festival is a national holiday in Viet Nam that is celebrated on the 10<sup>th</sup> day of the third lunar month, which usually falls in April. This festival commemorates the Hung Kings, <b class="text-indigo-700">(26) ________</b> were the first kings of Viet Nam and are considered the founding fathers of the nation.
              </p>
              <p class="mb-3 indent-6">
                The festival is celebrated by Vietnamese people all over the world, <b class="text-indigo-700">(27) ________</b> the biggest celebrations take place in the city of Phu Tho, where the Hung King Temple is located. People visit the temple to pay their <b class="text-indigo-700">(28) ________</b> and make offerings of incense, flowers, and food.
              </p>
              <p class="mb-3 indent-6">
                During the festival, there are also parades and cultural performances like lion dances and folk song singing. People wear colourful clothing and <b class="text-indigo-700">(29) ________</b> traditional games, such as bamboo pole dancing and tug-of-war.
              </p>
              <p class="indent-6">
                Hung King Festival is <b class="text-indigo-700">(30) ________</b> important cultural event in Viet Nam, as it honours the country's history and founding fathers.
              </p>
            </div>
          </div>
        `,
        text: "Question 26.",
        options: ["A. which", "B. who", "C. whose", "D. whom"],
        correct: 1,
        explanation: "Cần một đại từ quan hệ thay thế cho danh từ chỉ người \"the Hung Kings\" (các Vua Hùng) và đóng vai trò làm chủ ngữ trong mệnh đề phụ. Do đó dùng \"who\".<br><b>* Từ vựng mở rộng:</b><br>- commemorate (v): tưởng nhớ, kỷ niệm."
      },
      {
        id: 27,
        text: "Question 27.",
        options: ["A. but", "B. nor", "C. so", "D. or"],
        correct: 0,
        explanation: "Hai vế câu mang ý nghĩa tương phản: Lễ hội được tổ chức ở khắp nơi trên thế giới, NHƯNG (but) lễ kỷ niệm lớn nhất diễn ra ở Phú Thọ."
      },
      {
        id: 28,
        text: "Question 28.",
        options: ["A. attitudes", "B. sympathies", "C. senses", "D. respects"],
        correct: 3,
        explanation: "Cụm từ cố định: \"pay one's respects\" (bày tỏ lòng thành kính, tôn kính). Người dân đến đền để bày tỏ lòng thành kính và dâng hương hoa."
      },
      {
        id: 29,
        text: "Question 29.",
        options: ["A. come across", "B. put up", "C. bring about", "D. participate in"],
        correct: 3,
        explanation: "Mọi người mặc quần áo sặc sỡ và \"tham gia vào\" (participate in) các trò chơi truyền thống.<br><b>* Từ vựng mở rộng:</b><br>- come across: tình cờ gặp.<br>- bring about: mang lại, gây ra."
      },
      {
        id: 30,
        text: "Question 30.",
        options: ["A. an", "B. the", "C. Ø", "D. a"],
        correct: 0,
        explanation: "Lễ hội Đền Hùng là MỘT sự kiện văn hóa quan trọng. \"important\" bắt đầu bằng một nguyên âm (i) nên ta dùng mạo từ \"an\"."
      },
      {
        id: 31,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-magnifying-glass-chart text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the underlined part that needs correction in each of the following questions.</h3></div>`,
        text: "Question 31. Last summer my cousin <u class='font-bold text-indigo-700'>has stayed</u> <u class='font-bold text-indigo-700'>on</u> my <u class='font-bold text-indigo-700'>parents'</u> farm <u class='font-bold text-indigo-700'>for</u> a month.",
        options: ["A. has stayed", "B. for", "C. parents'", "D. on"],
        correct: 0,
        explanation: "Trong câu có trạng từ chỉ thời gian trong quá khứ đã kết thúc \"Last summer\" (Mùa hè năm ngoái). Vì vậy, động từ không được chia ở thì Hiện tại hoàn thành mà phải chia ở Quá khứ đơn. Sửa \"has stayed\" thành \"stayed\"."
      },
      {
        id: 32,
        text: "Question 32. You are interested <u class='font-bold text-indigo-700'>in</u> <u class='font-bold text-indigo-700'>playing</u> computer <u class='font-bold text-indigo-700'>games</u> in your free time, <u class='font-bold text-indigo-700'>are</u> you?",
        options: ["A. in", "B. playing", "C. are", "D. games"],
        correct: 2,
        explanation: "Đây là câu hỏi đuôi (Tag question). Mệnh đề chính ở thể khẳng định (\"You are\"), nên phần đuôi phải ở thể phủ định. Sửa \"are\" thành \"aren't\"."
      },
      {
        id: 33,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-wrench text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the sentence that is best written from the words/ phrases given.</h3></div>`,
        text: "Question 33. She / tell me / the trip / village / where / born / grow up.",
        options: [
          "A. She told me about the trip to the village where she was born and grew up.",
          "B. She told me about the trip to the village where she is born and grew up.",
          "C. She tells me about the trip to village where she be born and grew up.",
          "D. She tells me about the trip the village where she is born and grew up."
        ],
        correct: 0,
        explanation: "Việc sinh ra và lớn lên đã xảy ra trong quá khứ nên phải dùng thì quá khứ đơn (was born and grew up). Kể lại chuyến đi cũng ở quá khứ (told me about). Chỉ đáp án A đảm bảo đúng ngữ pháp và thì."
      },
      {
        id: 34,
        text: "Question 34. They / live / Moscow / before / they / move / a new house / London / last year.",
        options: [
          "A. They had lived in Moscow before they had moved into a new house in London last year.",
          "B. They lived in Moscow before they move into a new house in London last year.",
          "C. They lived in Moscow before they had moved into a new house in London last year.",
          "D. They had lived in Moscow before they moved into a new house in London last year."
        ],
        correct: 3,
        explanation: "Hành động sống ở Moscow xảy ra TRƯỚC hành động chuyển nhà (move) trong quá khứ (last year). Do đó, hành động xảy ra trước chia thì Quá khứ hoàn thành (had lived), hành động xảy ra sau chia Quá khứ đơn (moved). Cấu trúc: S + had + VpII + before + S + V(quá khứ)."
      },
      {
        id: 35,
        text: "Question 35. She / suggest / go / train / today / instead of / take / plane / tomorrow.",
        options: [
          "A. She suggested that we should go by train today instead of take the plane tomorrow.",
          "B. She suggested going by train today instead of we take the plane tomorrow.",
          "C. She suggested to go by train today instead of to take the plane tomorrow.",
          "D. She suggested going by train today instead of taking the plane tomorrow."
        ],
        correct: 3,
        explanation: "Cấu trúc đề xuất làm gì: \"suggest + V-ing\". Cấu trúc thay vì làm gì: \"instead of + V-ing\". Đáp án D sử dụng đúng cả hai cấu trúc này (going... taking).<br><b>* Từ vựng mở rộng:</b><br>- instead of: thay vì."
      },
      {
        id: 36,
        text: "Question 36. If / Lan / be / taller / work / fashion model.",
        options: [
          "A. If Lan were taller, she will work as a fashion model.",
          "B. If Lan were taller, she would have work as a fashion model.",
          "C. If Lan were taller, she would work as a fashion model.",
          "D. If Lan were taller, she would works like a fashion model."
        ],
        correct: 2,
        explanation: "Đây là câu điều kiện loại 2 giả định một điều không có thật ở hiện tại. Cấu trúc: If + S + were/V-ed, S + would/could + V(nguyên thể). Dịch: Nếu Lan cao hơn, cô ấy sẽ làm nghề người mẫu thời trang."
      },
      {
        id: 37,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-code-compare text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the sentence that is closest in meaning to each of the following questions.</h3></div>`,
        text: "Question 37. More people will use solar energy in the future.",
        options: [
          "A. Solar energy will be use by more people in the future.",
          "B. Solar energy will be used by more people on the future.",
          "C. Solar energy will be used by more people in the future.",
          "D. Solar energy will been used by more people in the future."
        ],
        correct: 2,
        explanation: "Chuyển từ câu chủ động sang bị động thì Tương lai đơn. Cấu trúc: \"will be + VpII\". \"solar energy\" làm chủ ngữ mới. Phải dùng giới từ \"in the future\" (không dùng on).<br><b>* Từ vựng mở rộng:</b><br>- solar energy (n): năng lượng mặt trời."
      },
      {
        id: 38,
        text: "Question 38. He started working as a computer programmer 5 years ago.",
        options: [
          "A. He has started working as a computer programmer for 5 years.",
          "B. He works as a computer programmer 5 years ago.",
          "C. He was working as a computer programmer 5 years ago.",
          "D. He has worked as a computer programmer for 5 years."
        ],
        correct: 3,
        explanation: "Cấu trúc biến đổi thì cơ bản: \"S + started/began + V-ing + (thời gian) ago\" -> \"S + has/have + VpII + for + (khoảng thời gian)\". Nghĩa là anh ấy đã làm nghề lập trình viên máy tính được 5 năm rồi."
      },
      {
        id: 39,
        text: "Question 39. Children should avoid spending too much time watching television.",
        options: [
          "A. It is a good idea for children not to spend too much time watching television.",
          "B. It is not a good idea for children spending too much time watching television.",
          "C. It is not a good idea for children spends too much time watching television.",
          "D. It is a good idea for children to spend too much time watching television."
        ],
        correct: 0,
        explanation: "Câu gốc: Trẻ em nên tránh dành quá nhiều thời gian xem tivi. Nghĩa tương đương với: Sẽ là một ý kiến hay nếu trẻ em KHÔNG dành quá nhiều thời gian xem tivi. Cấu trúc \"It is a good idea for sb (not) to do sth\" (Là một ý kiến hay cho ai (không) làm gì)."
      },
      {
        id: 40,
        text: "Question 40. My teacher asked me: \"Where are you going on your vacation this year?\"",
        options: [
          "A. My teacher asked me where I was going on my vacation that year.",
          "B. My teacher asked me where if I was going on my vacation that year.",
          "C. My teacher asked me where am I going on my vacation this year.",
          "D. My teacher asked me where are you going on my vacation this year."
        ],
        correct: 0,
        explanation: "Khi chuyển câu hỏi có từ để hỏi (Where) sang câu gián tiếp: không đảo ngữ (are you -> I was), lùi thì (hiện tại tiếp diễn -> quá khứ tiếp diễn), đổi trạng từ thời gian (this year -> that year)."
      }
    ]
  },
  "eng-na2025-101": {
    title: "Kỳ Thi Tuyển Sinh Vào Lớp 10 THPT (2025)",
    subtitle: "Sở GD&ĐT Nghệ An • Môn: Tiếng Anh • Mã đề: 101",
    subject: "Tiếng Anh",
    timeMinutes: 60,
    questions: [
      {
        id: 1,
        groupHtml: `<div class="mt-4 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-volume-high text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the word that differs from the other three in the position of stress in each of the following questions.</h3></div>`,
        text: "Question 1.",
        options: ["A. invention", "B. important", "C. historic", "D. engineer"],
        correct: 3,
        explanation: "Từ \"engineer\" có trọng âm rơi vào âm tiết thứ 3 (/ˌendʒɪˈnɪər/). Các từ còn lại có trọng âm rơi vào âm tiết thứ 2: invention (/ɪnˈvenʃn/), important (/ɪmˈpɔːtnt/), historic (/hɪˈstɒrɪk/).<br><b>* Từ vựng mở rộng:</b><br>- <b>historic (adj):</b> mang tính lịch sử, quan trọng trong lịch sử.<br>- <b>invention (n):</b> sự phát minh."
      },
      {
        id: 2,
        text: "Question 2.",
        options: ["A. support", "B. offer", "C. attend", "D. refuse"],
        correct: 1,
        explanation: "Từ \"offer\" có trọng âm rơi vào âm tiết 1 (/ˈɒfə(r)/). Các động từ còn lại có 2 âm tiết và trọng âm rơi vào âm tiết 2: support (/səˈpɔːt/), attend (/əˈtend/), refuse (/rɪˈfjuːz/).<br><b>* Từ vựng mở rộng:</b><br>- <b>refuse (v):</b> từ chối.<br>- <b>attend (v):</b> tham gia, tham dự."
      },
      {
        id: 3,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-circle-check text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the best answer to each of the following questions.</h3></div>`,
        text: "Question 3. After discussing with her mother, Laura ________ a decision to enroll in a cookery course.",
        options: ["A. did", "B. gave", "C. made", "D. took"],
        correct: 2,
        explanation: "Cụm từ cố định (Collocation): \"make a decision\" (đưa ra quyết định). Do hành động diễn ra trong quá khứ nên dùng \"made\".<br><b>* Từ vựng mở rộng:</b><br>- <b>enroll in (phr.v):</b> đăng ký tham gia (khóa học).<br>- <b>cookery course (n):</b> khóa học nấu ăn."
      },
      {
        id: 4,
        text: "Question 4. Mike and Alice ________ in New York since they got married twenty years ago.",
        options: ["A. lived", "B. have lived", "C. were living", "D. live"],
        correct: 1,
        explanation: "Dấu hiệu nhận biết thì Hiện tại hoàn thành: \"since + mốc thời gian/mệnh đề quá khứ đơn\" (kể từ khi...). Cấu trúc: S + have/has + VpII.<br><b>* Từ vựng & Ngữ pháp:</b><br>- <b>get married (v):</b> kết hôn."
      },
      {
        id: 5,
        text: "Question 5. My cousin and I ________ really well with each other.",
        options: ["A. look after", "B. put off", "C. get on", "D. give up"],
        correct: 2,
        explanation: "Cụm động từ: \"get on (well) with sb\" (có mối quan hệ tốt, hòa thuận với ai).<br><b>* Từ vựng mở rộng:</b><br>- <b>look after (phr.v):</b> chăm sóc.<br>- <b>put off (phr.v):</b> hoãn lại.<br>- <b>give up (phr.v):</b> từ bỏ."
      },
      {
        id: 6,
        text: "Question 6. I'm studying English ________ I want to work overseas in the future.",
        options: ["A. in spite of", "B. although", "C. because", "D. because of"],
        correct: 2,
        explanation: "Mệnh đề sau chỉ nguyên nhân (tôi muốn làm việc ở nước ngoài), lại là một mệnh đề hoàn chỉnh (S + V) nên ta dùng liên từ \"because\" (bởi vì).<br><b>* Từ vựng mở rộng:</b><br>- <b>overseas (adv):</b> ở nước ngoài, hải ngoại."
      },
      {
        id: 7,
        text: "Question 7. The little girl really enjoys ________ cartoons in her free time.",
        options: ["A. watched", "B. watch", "C. to watch", "D. watching"],
        correct: 3,
        explanation: "Cấu trúc: \"enjoy + V-ing\" (thích làm việc gì đó). Do vậy ta chọn \"watching\".<br><b>* Từ vựng mở rộng:</b><br>- <b>cartoon (n):</b> phim hoạt hình."
      },
      {
        id: 8,
        text: "Question 8. The sky is very ________ today. I think it is going to rain soon.",
        options: ["A. cloudy", "B. sunny", "C. bright", "D. clear"],
        correct: 0,
        explanation: "Dựa vào ngữ cảnh \"it is going to rain soon\" (trời sắp mưa), ta suy ra bầu trời đang rất nhiều mây (cloudy).<br><b>* Từ vựng mở rộng:</b><br>- <b>cloudy (adj):</b> nhiều mây.<br>- <b>bright / clear (adj):</b> sáng sủa, trong xanh."
      },
      {
        id: 9,
        text: "Question 9. Your brother doesn't often go online, ________?",
        options: ["A. does he", "B. doesn't he", "C. did he", "D. isn't he"],
        correct: 0,
        explanation: "Đây là câu hỏi đuôi (Tag question). Mệnh đề chính ở thể phủ định (doesn't) và dùng thì Hiện tại đơn, nên phần đuôi phải ở thể khẳng định là \"does he\".<br><b>* Từ vựng mở rộng:</b><br>- <b>go online (v):</b> lên mạng."
      },
      {
        id: 10,
        text: "Question 10. I get a lot of ________ from reading adventure stories.",
        options: ["A. excite", "B. excitement", "C. exciting", "D. excited"],
        correct: 1,
        explanation: "Sau từ chỉ số lượng \"a lot of\" ta cần một danh từ. Trong các đáp án, \"excitement\" (sự hào hứng, phấn khích) là danh từ phù hợp nhất.<br><b>* Từ vựng mở rộng:</b><br>- <b>adventure story (n):</b> truyện phiêu lưu.<br>- <b>excite (v):</b> làm cho hào hứng."
      },
      {
        id: 11,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-book-open-reader text-indigo-500 mr-2"></i>Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the best answer to each of the questions from 11 to 16.</h3>
            
            <div class="bg-white p-5 rounded-xl border border-indigo-50 text-slate-700">
              <p class="leading-relaxed text-justify mb-3 indent-6">
                In many schools today, students learn science and mathematics in English, even when English is not their first language. This method helps students learn new ideas in these important subjects and improves their English skills at the same time.
              </p>
              <p class="leading-relaxed text-justify mb-3 indent-6">
                Learning science subjects in English has several benefits. First, many science books and articles are written in English. If students know English, <u class="font-bold text-indigo-800">they</u> can understand and use these materials easily. Second, when students study science in English, they learn important words that help them speak about scientific topics clearly. This can help students who want to study or work in other countries in the future. Also, studying science in English encourages students to work together and discuss ideas clearly.
              </p>
              <p class="leading-relaxed text-justify mb-3 indent-6">
                However, this method can sometimes be difficult. Some students may find science ideas hard to understand because their English skills are <u class="font-bold text-indigo-800">limited</u>. Teachers may also have problems if their own English is not strong enough. Therefore, schools need to support teachers and students by providing extra training and language help.
              </p>
              <p class="leading-relaxed text-justify indent-6">
                In conclusion, learning science and math in English can give students many advantages. With good support from schools and teachers, students can successfully learn both important subjects and language skills for their future.
              </p>
            </div>
          </div>
        `,
        text: "Question 11. What is the main topic of the passage?",
        options: [
          "A. Problems faced by science teachers",
          "B. Learning English through reading books",
          "C. Teaching science and math in English",
          "D. Why English is difficult for students"
        ],
        correct: 2,
        explanation: "Đoạn văn chủ yếu bàn về việc học sinh học môn Khoa học và Toán bằng tiếng Anh, bao gồm lợi ích và những khó khăn đi kèm. Do đó, đáp án C (Dạy khoa học và toán bằng tiếng Anh) là chủ đề chính.<br><b>* Từ vựng mở rộng:</b><br>- <b>main topic (n):</b> chủ đề chính."
      },
      {
        id: 12,
        text: "Question 12. According to the passage, which is NOT a benefit of studying science in English?",
        options: [
          "A. Students understand science materials better.",
          "B. Students learn important scientific words.",
          "C. Students improve their English skills.",
          "D. Students can easily make friends with foreigners."
        ],
        correct: 3,
        explanation: "Các lợi ích được nhắc đến trong bài: hiểu tài liệu dễ dàng hơn (đoạn 2), học từ vựng khoa học quan trọng (đoạn 2), cải thiện kỹ năng tiếng Anh (đoạn 1). Việc \"dễ dàng kết bạn với người nước ngoài\" KHÔNG được đề cập đến.<br><b>* Từ vựng mở rộng:</b><br>- <b>foreigner (n):</b> người nước ngoài."
      },
      {
        id: 13,
        text: "Question 13. The word \"they\" in paragraph 2 refers to ________.",
        options: ["A. students", "B. articles", "C. books", "D. subjects"],
        correct: 0,
        explanation: "Trong câu: \"If students know English, they can understand...\" (Nếu học sinh biết tiếng Anh, họ có thể hiểu...), từ \"they\" thay thế cho danh từ \"students\" ngay phía trước.<br><b>* Từ vựng mở rộng:</b><br>- <b>refer to (phr.v):</b> ám chỉ, nhắc đến."
      },
      {
        id: 14,
        text: "Question 14. The word \"limited\" in paragraph 3 is closest in meaning to ________.",
        options: ["A. poor", "B. difficult", "C. strong", "D. careful"],
        correct: 0,
        explanation: "Từ \"limited\" mang nghĩa là hạn chế, yếu kém (khi nói về kỹ năng). Trong ngữ cảnh này, nó gần nghĩa nhất với \"poor\" (kém).<br><b>* Từ vựng mở rộng:</b><br>- <b>limited (adj):</b> hạn chế, có giới hạn."
      },
      {
        id: 15,
        text: "Question 15. What does the author suggest to help teachers and students?",
        options: [
          "A. Teaching only simple ideas in science and math",
          "B. Giving them extra training and language support",
          "C. Asking students to study alone at home",
          "D. Using only easy science books in classes"
        ],
        correct: 1,
        explanation: "Dựa vào câu cuối đoạn 3: \"Therefore, schools need to support teachers and students by providing extra training and language help.\" (Do đó, các trường học cần hỗ trợ giáo viên và học sinh bằng cách cung cấp thêm đào tạo và trợ giúp ngôn ngữ).<br><b>* Từ vựng mở rộng:</b><br>- <b>extra training (n):</b> đào tạo thêm."
      },
      {
        id: 16,
        text: "Question 16. What can be inferred about learning science in English from the passage?",
        options: [
          "A. It helps students prepare for the future.",
          "B. It makes learning science harder than before.",
          "C. It only works in some special schools.",
          "D. It is too difficult for most students to understand."
        ],
        correct: 0,
        explanation: "Dựa vào đoạn cuối: \"...students can successfully learn both important subjects and language skills for their future.\" Việc học này giúp học sinh chuẩn bị tốt hơn cho tương lai.<br><b>* Từ vựng mở rộng:</b><br>- <b>infer (v):</b> suy luận, suy ra."
      },
      {
        id: 17,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-arrows-left-right-to-line text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the word OPPOSITE in meaning to the underlined word in the following question.</h3></div>`,
        text: "Question 17. The instructions for building the model airplane were so <u class='font-bold text-indigo-700'>complicated</u> that only a few people could understand them.",
        options: ["A. complex", "B. unclear", "C. simple", "D. confusing"],
        correct: 2,
        explanation: "Từ \"complicated\" (phức tạp, rắc rối) TRÁI NGHĨA với \"simple\" (đơn giản, dễ hiểu). Các từ complex, confusing mang nghĩa tương đồng.<br><b>* Từ vựng mở rộng:</b><br>- <b>instruction (n):</b> sự hướng dẫn.<br>- <b>unclear (adj):</b> không rõ ràng."
      },
      {
        id: 18,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-volume-high text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the word whose underlined part differs from the other three in pronunciation in each of the following questions.</h3></div>`,
        text: "Question 18.",
        options: ["A. rain<u class='font-bold text-indigo-600'>ed</u>", "B. play<u class='font-bold text-indigo-600'>ed</u>", "C. call<u class='font-bold text-indigo-600'>ed</u>", "D. want<u class='font-bold text-indigo-600'>ed</u>"],
        correct: 3,
        explanation: "Phần gạch chân ở đáp án D được phát âm là /ɪd/ vì từ gốc tận cùng bằng âm /t/. Các từ còn lại phát âm là /d/."
      },
      {
        id: 19,
        text: "Question 19.",
        options: ["A. n<u class='font-bold text-indigo-600'>ou</u>n", "B. c<u class='font-bold text-indigo-600'>ou</u>ld", "C. f<u class='font-bold text-indigo-600'>ou</u>nd", "D. s<u class='font-bold text-indigo-600'>ou</u>nd"],
        correct: 1,
        explanation: "Phần gạch chân ở đáp án B được phát âm là /ʊ/ (/kʊd/). Các từ còn lại phát âm là /aʊ/."
      },
      {
        id: 20,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-link text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the sentence that best combines each pair of the following questions.</h3></div>`,
        text: "Question 20. The restaurant is very crowded. I can't find a seat there.",
        options: [
          "A. If the restaurant weren't very crowded, I can't find a seat there.",
          "B. If the restaurant isn't very crowded, I can find a seat there.",
          "C. If the restaurant were very crowded, I could find a seat there.",
          "D. If the restaurant weren't very crowded, I could find a seat there."
        ],
        correct: 3,
        explanation: "Sử dụng câu điều kiện loại 2 để diễn tả một giả định trái ngược với thực tế ở hiện tại. Thực tế nhà hàng rất đông (is crowded), giả định là \"Nếu nhà hàng không đông\" (If... weren't crowded), thì tôi đã có thể tìm được chỗ (I could find...).<br><b>* Cấu trúc:</b> If + S + V(quá khứ), S + would/could + V."
      },
      {
        id: 21,
        text: "Question 21. The entrance exam was difficult. Many students could pass it easily.",
        options: [
          "A. Many students could pass the entrance exam easily in spite of its difficulty.",
          "B. Many students could pass the entrance exam easily because it was difficult.",
          "C. Even though the entrance exam was easy, many students couldn't pass it easily.",
          "D. The entrance exam was difficult, so many students could pass it easily."
        ],
        correct: 0,
        explanation: "Hai câu mang ý nghĩa tương phản (bài thi khó nhưng nhiều học sinh qua dễ dàng). Cấu trúc \"in spite of + Noun/V-ing\" (mặc dù) thể hiện đúng sự nhượng bộ này.<br><b>* Từ vựng mở rộng:</b><br>- <b>entrance exam (n):</b> kỳ thi tuyển sinh/đầu vào.<br>- <b>difficulty (n):</b> sự khó khăn."
      },
      {
        id: 22,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-bullhorn text-indigo-500 mr-2"></i>Read the following announcement and mark the letter A, B, C or D on your answer sheet to indicate the correct word(s) that best fit(s) each of the numbered blanks from 22 to 24.</h3>
            
            <div class="bg-white p-6 rounded-xl border-2 border-dashed border-indigo-300 shadow-sm font-medium text-slate-700">
              <h4 class="text-center font-black text-xl text-indigo-900 mb-4 uppercase tracking-widest"><i class="fa-solid fa-leaf text-green-500 mr-2"></i>NEIGHBORHOOD CLEAN-UP DAY!</h4>
              <p class="mb-3 leading-relaxed">All residents <b class="text-indigo-700">(22) ________</b> to join our annual Clean-Up Day next Saturday, June 22<sup>nd</sup>.</p>
              <p class="mb-3 leading-relaxed">We will provide gloves and trash bags. Volunteers are asked to meet at the park entrance at 9 a.m. Together, we can <b class="text-indigo-700">(23) ________</b> our neighborhood beautiful and litter-free.</p>
              <p class="leading-relaxed"><b class="text-indigo-700">(24) ________</b> you need more details, please email cleanup@community.org.com</p>
            </div>
          </div>
        `,
        text: "Question 22.",
        options: ["A. are encouraged", "B. encourage", "C. have encouraged", "D. encouraged"],
        correct: 0,
        explanation: "Cần thể bị động: \"All residents are encouraged to join...\" (Tất cả cư dân được khuyến khích tham gia...).<br><b>* Từ vựng mở rộng:</b><br>- <b>resident (n):</b> cư dân."
      },
      {
        id: 23,
        text: "Question 23.",
        options: ["A. do", "B. get", "C. find", "D. keep"],
        correct: 3,
        explanation: "Cấu trúc: \"keep + O + adj\" (giữ cho cái gì đó như thế nào). Dịch: Cùng nhau, chúng ta có thể giữ cho khu dân cư của mình xinh đẹp và không có rác thải.<br><b>* Từ vựng mở rộng:</b><br>- <b>litter-free (adj):</b> không có rác."
      },
      {
        id: 24,
        text: "Question 24.",
        options: ["A. Will", "B. Should", "C. Could", "D. Might"],
        correct: 1,
        explanation: "Đây là cấu trúc đảo ngữ của câu điều kiện loại 1, mang ý nghĩa trang trọng: \"Should you need...\" = \"If you need...\".<br><b>* Từ vựng mở rộng:</b><br>- <b>detail (n):</b> thông tin chi tiết."
      },
      {
        id: 25,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 sm:p-8 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden" id="q-block-25">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <div class="flex justify-between items-start mb-6 border-b border-indigo-100 pb-4">
              <h3 class="font-bold text-indigo-900 text-base sm:text-lg leading-tight"><i class="fa-solid fa-hand-pointer text-indigo-500 mr-2"></i>Read the following passage and drag the correct word that best fits each of the numbered blanks from 25 to 29.</h3>
              <span class="bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm shrink-0 mt-0.5">Drag & Drop</span>
            </div>
            
            <div class="bg-white p-5 sm:p-6 rounded-xl border border-indigo-50 text-slate-700 leading-loose text-justify text-[15px] sm:text-base shadow-sm mb-6">
              <h4 class="text-center font-black text-lg text-indigo-900 mb-4 uppercase tracking-widest">STEAM EDUCATION: A MODERN WAY TO LEARN</h4>
              
              STEAM stands for Science, Technology, Engineering, the Arts, and Mathematics. This kind of education, 
              <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors inline-block align-middle mx-1" id="drop-zone-25" data-qid="25" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 25)" onclick="handleZoneClick(25)">
                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(25) Kéo vào đây</span>
              </span>
              has become more popular in many schools today, helps students think in creative ways and solve real problems.<br><br>
              
              In STEAM classes, students often work in groups. They talk about ideas and come up 
              <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors inline-block align-middle mx-1" id="drop-zone-26" data-qid="26" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 26)" onclick="handleZoneClick(26)">
                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(26) Kéo vào đây</span>
              </span>
              their own solutions. This helps them learn how to work with 
              <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors inline-block align-middle mx-1" id="drop-zone-27" data-qid="27" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 27)" onclick="handleZoneClick(27)">
                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(27) Kéo vào đây</span>
              </span>
              and share opinions.<br><br>

              Teachers in STEAM lessons do not just give answers. Instead, they require students to think and 
              <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors inline-block align-middle mx-1" id="drop-zone-28" data-qid="28" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 28)" onclick="handleZoneClick(28)">
                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(28) Kéo vào đây</span>
              </span>
              their own questions. This makes learning more interesting and active.<br><br>

              Many people believe that STEAM is a good way to prepare students for the future. These jobs need people who can think clearly and work well in a team. That's why STEAM is now a 
              <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors inline-block align-middle mx-1" id="drop-zone-29" data-qid="29" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 29)" onclick="handleZoneClick(29)">
                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(29) Kéo vào đây</span>
              </span>
              part of school programs. It gives students a fun and exciting way to learn.
            </div>

            <div class="bg-indigo-50/60 p-5 rounded-xl border border-indigo-100">
              <p class="mb-3 text-indigo-800 font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                <i class="fa-solid fa-layer-group"></i> Kho câu trả lời (Click hoặc Kéo thả)
              </p>
              <div class="dnd-pool grid grid-cols-2 md:grid-cols-4 gap-3 min-h-[100px]" id="dnd-pool" ondragover="handleDragOver(event)" ondrop="handlePoolDrop(event)" onclick="handlePoolClick(event)">
                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all text-center font-medium" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-0" data-idx="0">which</div>
                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all text-center font-medium" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-1" data-idx="1">with</div>
                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all text-center font-medium" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-2" data-idx="2">others</div>
                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all text-center font-medium" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-3" data-idx="3">ask</div>
                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all text-center font-medium" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-4" data-idx="4">normal</div>
              </div>
            </div>
          </div>
        `,
        isHidden: true,
        correct: 0,
        explanation: "Cần một đại từ quan hệ thay thế cho danh từ chỉ vật \"This kind of education\" (Loại hình giáo dục này) nằm trong mệnh đề quan hệ không xác định. Ta dùng \"which\".<br><b>* Từ vựng mở rộng:</b><br>- <b>popular (adj):</b> phổ biến."
      },
      {
        id: 26,
        isHidden: true,
        correct: 1,
        explanation: "Cụm động từ: \"come up with\" (nảy ra ý tưởng, giải pháp). Dịch: Họ thảo luận và nảy ra các giải pháp riêng của mình.<br><b>* Từ vựng mở rộng:</b><br>- <b>solution (n):</b> giải pháp."
      },
      {
        id: 27,
        isHidden: true,
        correct: 2,
        explanation: "Từ \"others\" mang nghĩa là \"những người khác\" (làm đại từ, không có danh từ theo sau). Cụm \"work with others\" nghĩa là làm việc cùng những người khác.<br><b>* Từ vựng mở rộng:</b><br>- <b>opinion (n):</b> ý kiến."
      },
      {
        id: 28,
        isHidden: true,
        correct: 3,
        explanation: "Học sinh được yêu cầu suy nghĩ và \"đặt câu hỏi\" của riêng họ. Động từ đi cùng question ở đây là \"ask\" (ask questions).<br><b>* Từ vựng mở rộng:</b><br>- <b>require (v):</b> yêu cầu."
      },
      {
        id: 29,
        isHidden: true,
        correct: 4,
        explanation: "STEAM ngày nay đã trở thành một phần \"phổ biến/bình thường\" trong các chương trình học. Ta dùng \"normal\".<br><b>* Từ vựng mở rộng:</b><br>- <b>normal (adj):</b> bình thường, phổ biến, thông thường."
      },
      {
        id: 30,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-magnifying-glass-chart text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the underlined part that needs correction in each of the following questions.</h3></div>`,
        text: "Question 30. <u class='font-bold text-indigo-700'>This</u> new laptop is quite <u class='font-bold text-indigo-700'>differentiate</u> from <u class='font-bold text-indigo-700'>the old</u> one I <u class='font-bold text-indigo-700'>had</u> last year.",
        options: ["A. This", "B. differentiate", "C. the old", "D. had"],
        correct: 1,
        explanation: "Sau tobe \"is\" và trạng từ chỉ mức độ \"quite\", ta cần một tính từ. \"differentiate\" là động từ (phân biệt), cần sửa thành tính từ \"different\" (khác biệt)."
      },
      {
        id: 31,
        text: "Question 31. There were <u class='font-bold text-indigo-700'>only</u> a few classrooms and <u class='font-bold text-indigo-700'>its</u> walls <u class='font-bold text-indigo-700'>were made of</u> mud <u class='font-bold text-indigo-700'>and</u> straw.",
        options: ["A. only", "B. its", "C. were made of", "D. and"],
        correct: 1,
        explanation: "Đại từ sở hữu phải hòa hợp với danh từ mà nó thay thế. \"classrooms\" là số nhiều nên đại từ sở hữu phải là \"their\" (của chúng), không dùng \"its\".<br><b>* Từ vựng mở rộng:</b><br>- <b>straw (n):</b> rơm rạ."
      },
      {
        id: 32,
        text: "Question 32. <u class='font-bold text-indigo-700'>Our</u> teacher <u class='font-bold text-indigo-700'>gives</u> us <u class='font-bold text-indigo-700'>some</u> Geography homework yesterday <u class='font-bold text-indigo-700'>afternoon</u>.",
        options: ["A. Our", "B. gives", "C. some", "D. afternoon"],
        correct: 1,
        explanation: "Dấu hiệu thời gian là \"yesterday afternoon\" (chiều hôm qua) nên động từ phải chia ở thì Quá khứ đơn. Sửa \"gives\" thành \"gave\"."
      },
      {
        id: 33,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-link text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C or D on your answer sheet to indicate the word CLOSEST in meaning to the underlined word in the following question.</h3></div>`,
        text: "Question 33. We should <u class='font-bold text-indigo-700'>reduce</u> the amount of daily plastic usage to protect the environment.",
        options: ["A. increase", "B. lower", "C. produce", "D. reuse"],
        correct: 1,
        explanation: "Từ \"reduce\" (giảm thiểu) ĐỒNG NGHĨA với \"lower\" (làm thấp đi, giảm xuống).<br><b>* Từ vựng mở rộng:</b><br>- <b>plastic usage (n):</b> việc sử dụng đồ nhựa."
      },
      {
        id: 34,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-code-compare text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the sentence that is closest in meaning to the given one.</h3></div>`,
        text: "Question 34. You are not allowed to use your phone during the exam.",
        options: [
          "A. You should turn off your phone before the exam starts.",
          "B. You are required to use your phone for the exam.",
          "C. You must not use your phone while taking the exam.",
          "D. You can use your phone after the exam ends."
        ],
        correct: 2,
        explanation: "Cấu trúc \"be not allowed to V\" (không được phép làm gì) đồng nghĩa với việc cấm đoán bằng động từ khuyết thiếu \"must not + V\" (cấm không được làm gì)."
      },
      {
        id: 35,
        text: "Question 35. Linda began playing the guitar 5 years ago.",
        options: [
          "A. Linda has played the guitar for 5 years ago.",
          "B. Linda had played the guitar since 5 years.",
          "C. Linda has stopped playing the guitar 5 years ago.",
          "D. Linda has been playing the guitar for 5 years."
        ],
        correct: 3,
        explanation: "Câu gốc: \"Linda bắt đầu chơi đàn guitar 5 năm trước\" -> Chuyển sang Hiện tại hoàn thành (tiếp diễn): \"Linda đã và đang chơi đàn guitar được 5 năm\" (has been playing... for 5 years). Không dùng \"ago\" với Hiện tại hoàn thành."
      },
      {
        id: 36,
        text: "Question 36. Tom said to me, \"Where are you taking your vacation this summer?\"",
        options: [
          "A. Tom asked me where was I taking my vacation that summer.",
          "B. Tom asked me where am I taking my vacation this summer.",
          "C. Tom asked me where I will take my vacation this summer.",
          "D. Tom asked me where I was taking my vacation that summer."
        ],
        correct: 3,
        explanation: "Chuyển từ câu trực tiếp sang gián tiếp: Lùi thì (are taking -> was taking), đổi đại từ (you -> I), đổi trạng từ thời gian (this summer -> that summer) và KHÔNG đảo ngữ (where I was taking, không phải where was I taking)."
      },
      {
        id: 37,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-layer-group text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the best arrangement of the sentences to make a meaningful dialogue/paragraph in each of the following questions.</h3></div>`,
        text: "Question 37.<br>a. Anna: \"Cold but beautiful. You might even see snow.\"<br>b. Anna: \"Have you ever been to Sapa in the winter?\"<br>c. Brian: \"Really? I've always wanted to see snow in Vietnam.\"<br>d. Brian: \"No, never. What's it like?\"",
        options: ["A. a - b - d - c", "B. b - d - a - c", "C. b - a - c - d", "D. a - b - c - d"],
        correct: 1,
        explanation: "Trình tự hợp lý: Anna hỏi Brian đã từng đến Sapa mùa đông chưa (b). Brian đáp chưa và hỏi lại thời tiết thế nào (d). Anna mô tả lạnh và có tuyết (a). Brian tỏ ra hào hứng vì luôn muốn thấy tuyết (c). -> Thứ tự đúng: b - d - a - c."
      },
      {
        id: 38,
        text: "Question 38.<br>a. Hung: \"Almost every day. It helps me stay active.\"<br>b. Lan: \"How often do you ride your bicycle to school?\"<br>c. Lan: \"That's great! And it's good for the environment too.\"",
        options: ["A. a - b - c", "B. c - a - b", "C. a - c - b", "D. b - a - c"],
        correct: 3,
        explanation: "Trình tự hợp lý: Lan hỏi tần suất Hùng đạp xe (b). Hùng trả lời \"gần như mỗi ngày\" và nêu lợi ích giữ sức khỏe (a). Lan khen ngợi và bổ sung thêm lợi ích bảo vệ môi trường (c). -> Thứ tự đúng: b - a - c."
      },
      {
        id: 39,
        text: "Question 39.<br>a. Mike: \"How was it?\"<br>b. Tina: \"Pretty good. I liked the atmosphere.\"<br>c. Mike: \"Did you try the new coffee shop on Main Street?\"<br>d. Mike: \"Nice! I'll check it out this weekend.\"<br>e. Tina: \"Yes! I went there yesterday.\"",
        options: ["A. b - a - d - c - e", "B. c - e - a - b - d", "C. a - b - d - c - e", "D. a - b - d - e - c"],
        correct: 1,
        explanation: "Trình tự hợp lý: Mike hỏi Tina đã thử quán cà phê mới chưa (c). Tina đáp rồi (e). Mike hỏi trải nghiệm thế nào (a). Tina nói khá ổn và thích không khí (b). Mike chốt sẽ ghé thử cuối tuần (d). -> Thứ tự đúng: c - e - a - b - d."
      },
      {
        id: 40,
        text: "Question 40.<br>a. Also, making a travel plan before the trip helps people save time and avoid problems.<br>b. Traveling to new places is a great way to learn and enjoy new things.<br>c. As a result, people who travel more often become more open and comfortable in new situations.<br>d. In conclusion, travel helps people grow and understand the world better.<br>e. For example, meeting people from other countries can change how you think about life.",
        options: ["A. b - a - e - c - d", "B. e - a - b - c - d", "C. a - b - e - d - c", "D. b - e - c - a - d"],
        correct: 3,
        explanation: "Trình tự logic của đoạn văn: (b) Câu chủ đề: Du lịch là cách tuyệt vời để học hỏi. -> (e) Đưa ra ví dụ: Gặp gỡ người nước ngoài làm thay đổi tư duy. -> (c) Kết quả của ví dụ: Trở nên cởi mở hơn. -> (a) Bổ sung thêm ý: Việc lên kế hoạch cũng giúp tránh rắc rối. -> (d) Câu kết luận: Du lịch giúp con người trưởng thành. -> Thứ tự đúng: b - e - c - a - d."
      }
    ]
  },
  "eng-na2024-132": {
    title: "Kỳ Thi Tuyển Sinh Vào Lớp 10 THPT (2024)",
    subtitle: "Sở GD&ĐT Nghệ An • Môn: Tiếng Anh • Mã đề: 132",
    subject: "Tiếng Anh",
    timeMinutes: 60,
    questions: [
      {
        id: 1,
        groupHtml: `<div class="mt-4 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-volume-high text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the word whose underlined part differs from the other three in pronunciation in each of the following questions.</h3></div>`,
        text: "Question 1.",
        options: ["A. <u class='font-bold text-indigo-600'>th</u>in", "B. <u class='font-bold text-indigo-600'>th</u>eir", "C. <u class='font-bold text-indigo-600'>th</u>an", "D. <u class='font-bold text-indigo-600'>th</u>em"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Phần gạch chân ở đáp án A được phát âm là /θ/ (âm vô thanh). Các đáp án còn lại được phát âm là /ð/ (âm hữu thanh).<br><b>* Từ vựng mở rộng:</b><br>- <b>thin (adj):</b> mỏng, gầy."
      },
      {
        id: 2,
        text: "Question 2.",
        options: ["A. dr<u class='font-bold text-indigo-600'>i</u>ve", "B. th<u class='font-bold text-indigo-600'>i</u>nk", "C. m<u class='font-bold text-indigo-600'>i</u>nd", "D. f<u class='font-bold text-indigo-600'>i</u>nd"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Phần gạch chân ở đáp án B được phát âm là /ɪ/ (/θɪŋk/). Các từ còn lại được phát âm là /aɪ/ (drive, mind, find)."
      },
      {
        id: 3,
        text: "Question 3.",
        options: ["A. stopp<u class='font-bold text-indigo-600'>ed</u>", "B. lov<u class='font-bold text-indigo-600'>ed</u>", "C. press<u class='font-bold text-indigo-600'>ed</u>", "D. work<u class='font-bold text-indigo-600'>ed</u>"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Quy tắc phát âm đuôi -ed: Đáp án B phát âm là /d/ (do từ gốc kết thúc bằng âm hữu thanh /v/). Các đáp án còn lại phát âm là /t/ (do từ gốc kết thúc bằng các âm vô thanh /p/, /s/, /k/)."
      },
      {
        id: 4,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-arrows-left-right-to-line text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the word that is OPPOSITE in meaning to the underlined part in each of the following questions.</h3></div>`,
        text: "Question 4. We arranged to meet at 7.30, but she didn't <u class='font-bold text-indigo-700'>turn up</u>.",
        options: ["A. arrive", "B. appear", "C. come", "D. leave"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Cụm động từ 'turn up' có nghĩa là xuất hiện, đến (đồng nghĩa với arrive, appear, come). Trái nghĩa với nó là 'leave' (rời đi).<br><b>* Từ vựng mở rộng:</b><br>- <b>arrange (v):</b> sắp xếp."
      },
      {
        id: 5,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-link text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the sentence that best combines each pair of sentences in the following questions.</h3></div>`,
        text: "Question 5. You should wear your coat. You may catch a cold.",
        options: [
          "A. If you don't wear your coat, you may catch a cold.",
          "B. Unless you wear your coat, you may not catch a cold.",
          "C. You may wear a coat if you don't catch a cold.",
          "D. You may catch a cold even though you wear your coat."
        ],
        correct: 0,
        explanation: "<b>Giải thích:</b> Hai câu gốc: 'Bạn nên mặc áo khoác. Bạn có thể bị cảm lạnh.' -> Ghép lại thành câu điều kiện loại 1: 'Nếu bạn KHÔNG mặc áo khoác, bạn có thể bị cảm lạnh' (If you don't wear...). Đáp án B sai nghĩa vì Unless = If not (Nếu bạn không mặc, bạn có thể KHÔNG bị cảm - vô lý).<br><b>* Ngữ pháp:</b><br>- Cấu trúc: <b>If + S + V(hiện tại), S + may/will + V</b>."
      },
      {
        id: 6,
        text: "Question 6. A burglar broke into the building. At the time, the guard was sleeping.",
        options: [
          "A. When a burglar was breaking into the building, the guard slept.",
          "B. Before a burglar broke into the building, the guard slept.",
          "C. A burglar broke into the building as soon as the guard slept.",
          "D. When a burglar broke into the building, the guard was sleeping."
        ],
        correct: 3,
        explanation: "<b>Giải thích:</b> Câu diễn tả một hành động đang xảy ra (bảo vệ đang ngủ) thì một hành động khác xen vào (kẻ trộm đột nhập). Hành động xen vào chia Quá khứ đơn (broke into), hành động đang xảy ra chia Quá khứ tiếp diễn (was sleeping).<br><b>* Từ vựng mở rộng:</b><br>- <b>burglar (n):</b> kẻ trộm đột nhập."
      },
      {
        id: 7,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-microphone-lines text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the word that differs from the other three in the position of primary stress in each of the following questions.</h3></div>`,
        text: "Question 7.",
        options: ["A. attraction", "B. excellent", "C. beautiful", "D. character"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Từ 'attraction' có trọng âm rơi vào âm tiết 2 (/əˈtrækʃn/). Các từ còn lại có trọng âm rơi vào âm tiết 1: excellent (/ˈeksələnt/), beautiful (/ˈbjuːtɪfl/), character (/ˈkærəktə(r)/).<br><b>* Mẹo:</b> Đuôi -tion luôn làm trọng âm rơi vào âm tiết ngay trước nó."
      },
      {
        id: 8,
        text: "Question 8.",
        options: ["A. woman", "B. husband", "C. doctor", "D. refer"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Từ 'refer' có trọng âm rơi vào âm tiết 2 (/rɪˈfɜː(r)/). Các từ còn lại có trọng âm rơi vào âm tiết 1."
      },
      {
        id: 9,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-comments text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the response that best completes each of the following exchanges.</h3></div>`,
        text: "Question 9. Nick is talking to Mary at the office.<br>- Nick: \"What a beautiful dress you're wearing!\"<br>- Mary: \"________\"",
        options: ["A. Yes, it is.", "B. No, thanks.", "C. Thank you.", "D. Sorry, it isn't."],
        correct: 2,
        explanation: "<b>Giải thích:</b> Khi nhận được một lời khen ngợi ('Bạn mặc chiếc váy đẹp quá!'), cách đáp lại lịch sự và phổ biến nhất là nói lời cảm ơn ('Thank you.')."
      },
      {
        id: 10,
        text: "Question 10. John and Peter are talking to each other in the playground.<br>- John: \"What shall we do this weekend?\"<br>- Peter: \"________\"",
        options: ["A. No problem.", "B. Yes, let's.", "C. I'll go out for dinner.", "D. Let's go for a picnic."],
        correct: 3,
        explanation: "<b>Giải thích:</b> Câu hỏi của John dùng để xin gợi ý ('Chúng ta nên làm gì vào cuối tuần này?'). Lời đáp phù hợp nhất phải là đưa ra một đề xuất: 'Let's go for a picnic.' (Hãy đi dã ngoại đi)."
      },
      {
        id: 11,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 sm:p-8 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden" id="q-block-11">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <div class="flex justify-between items-start mb-6 border-b border-indigo-100 pb-4">
              <h3 class="font-bold text-indigo-900 text-base sm:text-lg leading-tight"><i class="fa-solid fa-hand-pointer text-indigo-500 mr-2"></i>Read the following passage and drag the correct word or phrase that best fits each of the numbered blanks from 11 to 15.</h3>
              <span class="bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded shadow-sm shrink-0 mt-0.5">Drag & Drop</span>
            </div>
            
            <div class="bg-white p-5 sm:p-6 rounded-xl border border-indigo-50 text-slate-700 leading-loose text-justify text-[15px] sm:text-base shadow-sm mb-6">
              English is spoken around the world. It isn't just one language; it's made up of many versions that their change depends 
              <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors inline-block align-middle mx-1" id="drop-zone-11" data-qid="11" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 11)" onclick="handleZoneClick(11)">
                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(11) Kéo vào đây</span>
              </span>
              where people live and their culture. 
              
              <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors inline-block align-middle mx-1" id="drop-zone-12" data-qid="12" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 12)" onclick="handleZoneClick(12)">
                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(12) Kéo vào đây</span>
              </span>
              , American English and British English have different words and accents. In Britain, people say "lorry" while Americans say "truck". Even the way words are pronounced can be 
              
              <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors inline-block align-middle mx-1" id="drop-zone-13" data-qid="13" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 13)" onclick="handleZoneClick(13)">
                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(13) Kéo vào đây</span>
              </span>
              , like how "schedule" sounds.<br><br>

              In other countries, people 
              <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors inline-block align-middle mx-1" id="drop-zone-14" data-qid="14" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 14)" onclick="handleZoneClick(14)">
                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(14) Kéo vào đây</span>
              </span>
              learn English as a second language might create new ways of speaking it, adding local words and expressions. This makes English rich and varied, 
              
              <span class="drop-zone relative min-w-[120px] sm:min-w-[150px] h-[34px] bg-slate-100 border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:bg-indigo-50 transition-colors inline-block align-middle mx-1" id="drop-zone-15" data-qid="15" ondragover="handleDragOver(event)" ondrop="handleDrop(event, 15)" onclick="handleZoneClick(15)">
                <span class="empty-text absolute inset-0 flex items-center justify-center text-indigo-400 font-bold text-sm pointer-events-none">(15) Kéo vào đây</span>
              </span>
              off the unique cultures of its speakers.
            </div>

            <div class="bg-indigo-50/60 p-5 rounded-xl border border-indigo-100">
              <p class="mb-3 text-indigo-800 font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                <i class="fa-solid fa-layer-group"></i> Kho câu trả lời (Click hoặc Kéo thả)
              </p>
              <div class="dnd-pool grid grid-cols-2 md:grid-cols-5 gap-3 min-h-[100px]" id="dnd-pool" ondragover="handleDragOver(event)" ondrop="handlePoolDrop(event)" onclick="handlePoolClick(event)">
                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all text-center font-medium" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-0" data-idx="0">on</div>
                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all text-center font-medium" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-1" data-idx="1">For example</div>
                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all text-center font-medium" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-2" data-idx="2">different</div>
                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all text-center font-medium" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-3" data-idx="3">who</div>
                <div class="drag-item cursor-pointer p-3 bg-white border-2 border-indigo-200 rounded-xl shadow-sm hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all text-center font-medium" draggable="true" ondragstart="handleDragStart(event)" onclick="handleItemClick(event)" id="drag-opt-4" data-idx="4">showing</div>
              </div>
            </div>
          </div>
        `,
        isHidden: true,
        correct: 0,
        explanation: "<b>Giải thích:</b> Động từ 'depend' đi kèm với giới từ 'on' (phụ thuộc vào). Dịch: '...phụ thuộc vào nơi con người sinh sống và nền văn hóa của họ'."
      },
      {
        id: 12,
        isHidden: true,
        correct: 1,
        explanation: "<b>Giải thích:</b> Câu trước nói về việc tiếng Anh có nhiều phiên bản. Câu này lấy dẫn chứng về Anh-Mỹ và Anh-Anh. Do đó dùng cụm 'For example' (Ví dụ).<br><b>* Từ vựng mở rộng:</b><br>- <b>accent (n):</b> giọng điệu."
      },
      {
        id: 13,
        isHidden: true,
        correct: 2,
        explanation: "<b>Giải thích:</b> Sau động từ tobe 'can be', ta cần một tính từ. 'different' (khác biệt) là từ phù hợp. Dịch: 'Ngay cả cách phát âm các từ cũng có thể khác nhau...'"
      },
      {
        id: 14,
        isHidden: true,
        correct: 3,
        explanation: "<b>Giải thích:</b> Cần một đại từ quan hệ thay thế cho danh từ chỉ người 'people' đóng vai trò chủ ngữ. Ta dùng 'who'. Dịch: 'Những người học tiếng Anh như ngôn ngữ thứ hai...'"
      },
      {
        id: 15,
        isHidden: true,
        correct: 4,
        explanation: "<b>Giải thích:</b> Cụm động từ (Phrasal verb): 'show off' (thể hiện, phô diễn). Dịch: '...thể hiện những nét văn hóa độc đáo của người nói'."
      },
      {
        id: 16,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-circle-check text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the best answer to each of the following questions.</h3></div>`,
        text: "Question 16. We need someone to ________ our children when we are away from home.",
        options: ["A. gave out", "B. keep up", "C. look after", "D. take up"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Cụm động từ 'look after' có nghĩa là chăm sóc, trông nom. Dịch: Chúng tôi cần ai đó trông nom bọn trẻ khi chúng tôi vắng nhà.<br><b>* Từ vựng mở rộng:</b><br>- <b>give out:</b> phân phát.<br>- <b>take up:</b> bắt đầu một sở thích."
      },
      {
        id: 17,
        text: "Question 17. ________ my sister was busy, she helped me do my homework.",
        options: ["A. Despite", "B. Although", "C. However", "D. Because"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Hai mệnh đề mang ý nghĩa tương phản (bận rộn - vẫn giúp làm bài tập). Phía sau chỗ trống là một mệnh đề hoàn chỉnh (S + V) nên ta dùng 'Although' (Mặc dù)."
      },
      {
        id: 18,
        text: "Question 18. The ________ of electricity was a milestone of modern history.",
        options: ["A. discovery", "B. discoverer", "C. discover", "D. discovering"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Sau mạo từ 'The' ta cần một danh từ. 'discovery' (sự khám phá/phát hiện) là phù hợp nhất về ngữ nghĩa. Dịch: Sự phát hiện ra điện năng là một cột mốc của lịch sử hiện đại.<br><b>* Từ vựng mở rộng:</b><br>- <b>milestone (n):</b> cột mốc quan trọng."
      },
      {
        id: 19,
        text: "Question 19. Benny is going to get an email from his friend, ________?",
        options: ["A. isn't he", "B. is he", "C. doesn't he", "D. does he"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Đây là câu hỏi đuôi (Tag question). Mệnh đề chính ở khẳng định với tobe 'is', do đó phần đuôi phải ở phủ định với tobe là 'isn't he'."
      },
      {
        id: 20,
        text: "Question 20. It was a complete ________; I never meant to hurt her.",
        options: ["A. accident", "B. chance", "C. error", "D. happening"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Cụm từ cố định: 'a complete accident' (hoàn toàn là vô tình/tai nạn). Dịch: Đó hoàn toàn là vô tình, tôi không bao giờ có ý định làm cô ấy tổn thương.<br><b>* Từ vựng mở rộng:</b><br>- <b>mean to do sth:</b> có ý định làm gì."
      },
      {
        id: 21,
        text: "Question 21. Mary finished ________ the report just minutes before it was due.",
        options: ["A. being typed", "B. type", "C. to type", "D. typing"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Cấu trúc: 'finish + V-ing' (hoàn thành việc gì). Ta chọn 'typing'.<br><b>* Từ vựng mở rộng:</b><br>- <b>due (adj):</b> đến hạn."
      },
      {
        id: 22,
        text: "Question 22. I love watching the parade ________ Independence Day.",
        options: ["A. on", "B. over", "C. to", "D. at"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Đi với một ngày cụ thể trong năm (Independence Day - Ngày Quốc Khánh), ta bắt buộc dùng giới từ 'on'.<br><b>* Từ vựng mở rộng:</b><br>- <b>parade (n):</b> cuộc diễu hành."
      },
      {
        id: 23,
        text: "Question 23. He won't have much time to prepare for the meeting ________ is being held this afternoon.",
        options: ["A. whose", "B. which", "C. what", "D. who"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Cần đại từ quan hệ thay thế cho danh từ chỉ vật 'the meeting' và làm chủ ngữ cho mệnh đề phía sau. Ta dùng 'which'."
      },
      {
        id: 24,
        text: "Question 24. Turn off the faucet when you don't use it to save ________.",
        options: ["A. gas", "B. wood", "C. electricity", "D. water"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Dựa vào ngữ nghĩa: 'Turn off the faucet' (tắt vòi nước), mục đích là để tiết kiệm nước (water).<br><b>* Từ vựng mở rộng:</b><br>- <b>faucet (n):</b> vòi nước."
      },
      {
        id: 25,
        text: "Question 25. He ________ be a pilot but now he has a desk job.",
        options: ["A. uses to", "B. use to", "C. is used to", "D. used to"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Cấu trúc diễn tả một thói quen hoặc trạng thái từng có trong quá khứ nhưng nay không còn: 'used to + V'. Dịch: Anh ấy từng là một phi công nhưng giờ anh ấy làm công việc bàn giấy."
      },
      {
        id: 26,
        text: "Question 26. My English teacher ________ me with the means to enjoy reading poetry.",
        options: ["A. provided", "B. gave", "C. offered", "D. presented"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Cấu trúc: 'provide somebody with something' (cung cấp cho ai cái gì).<br><b>* Từ vựng mở rộng:</b><br>- <b>poetry (n):</b> thơ ca."
      },
      {
        id: 27,
        text: "Question 27. I can't wash any clothes ________.",
        options: [
          "A. until they have repaired the washing machine",
          "B. until they had repaired the washing machine",
          "C. before they will repair the washing machine",
          "D. before they repaired the washing machine"
        ],
        correct: 0,
        explanation: "<b>Giải thích:</b> Sự phối hợp thì: Mệnh đề chính ở thì hiện tại/tương lai (can't wash), mệnh đề thời gian đi theo sau (until/before/when...) KHÔNG được chia ở tương lai hay quá khứ, mà chia ở Hiện tại đơn hoặc Hiện tại hoàn thành (nhấn mạnh sự hoàn tất). Đáp án A là chính xác."
      },
      {
        id: 28,
        text: "Question 28. The children are excited about ________ to the zoo.",
        options: ["A. being taken", "B. to be taken", "C. taking", "D. to take"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Sau giới từ 'about' cần một danh động từ (V-ing). Do bọn trẻ 'được đưa đi' sở thú (mang nghĩa bị động), ta dùng dạng bị động của danh động từ là 'being + VpII' (being taken)."
      },
      {
        id: 29,
        text: "Question 29. The children ________ their homework when I got home last night.",
        options: ["A. have done", "B. were doing", "C. do", "D. done"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Hành động đang xảy ra tại một thời điểm xác định trong quá khứ (khi tôi về nhà tối qua) thì chia ở thì Quá khứ tiếp diễn. 'The children' số nhiều nên dùng 'were doing'."
      },
      {
        id: 30,
        text: "Question 30. Her second compilation was the ________ of them all.",
        options: ["A. exceptionalest", "B. exceptional", "C. most exceptional", "D. more exceptional"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Có dấu hiệu so sánh nhất 'of them all' (trong tất cả số chúng) và mạo từ 'the'. 'exceptional' là tính từ dài nên dùng 'most exceptional'.<br><b>* Từ vựng mở rộng:</b><br>- <b>exceptional (adj):</b> xuất sắc, khác thường."
      },
      {
        id: 31,
        text: "Question 31. After the movie, we had planned to go to the beach, but we decided to call it a(n) ________ as everyone was tired.",
        options: ["A. day", "B. night", "C. month", "D. hour"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Thành ngữ (Idiom): 'call it a day' có nghĩa là quyết định dừng việc đang làm (nghỉ ngơi, kết thúc một ngày làm việc/chơi bời)."
      },
      {
        id: 32,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-magnifying-glass-chart text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the underlined part that needs correction in each of the following questions.</h3></div>`,
        text: "Question 32. After <u class='font-bold text-indigo-700'>the</u> match, the <u class='font-bold text-indigo-700'>winning</u> team returned <u class='font-bold text-indigo-700'>back</u> home in <u class='font-bold text-indigo-700'>triumph</u>.",
        options: ["A. triumph", "B. winning", "C. back", "D. the"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Động từ 'return' bản thân nó đã mang nghĩa là quay lại, trở về. Do đó việc thêm 'back' là thừa thãi. Lỗi sai ở 'back' (cần bỏ đi).<br><b>* Từ vựng mở rộng:</b><br>- <b>in triumph (idiom):</b> trong niềm vui chiến thắng."
      },
      {
        id: 33,
        text: "Question 33. Mary is <u class='font-bold text-indigo-700'>beautiful</u>, <u class='font-bold text-indigo-700'>intelligent</u>, <u class='font-bold text-indigo-700'>easy-going</u>, and <u class='font-bold text-indigo-700'>many people like her</u>.",
        options: ["A. easy-going", "B. intelligent", "C. many people like her", "D. beautiful"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Cấu trúc song song (Parallel structure). Các từ nối với nhau bằng 'and' phải cùng từ loại. Phía trước là loạt tính từ (beautiful, intelligent, easy-going), do đó phía sau cũng phải là tính từ (ví dụ: likable/popular) chứ không thể là một mệnh đề. Sai ở 'many people like her'."
      },
      {
        id: 34,
        text: "Question 34. At the <u class='font-bold text-indigo-700'>age</u> of 25, she <u class='font-bold text-indigo-700'>still</u> leads a very <u class='font-bold text-indigo-700'>busy</u> and <u class='font-bold text-indigo-700'>interested</u> life.",
        options: ["A. still", "B. interested", "C. busy", "D. age"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Dùng tính từ đuôi -ing để miêu tả bản chất của sự vật/sự việc. Cuộc sống thú vị phải dùng 'interesting life'. Tính từ đuôi -ed thường dùng chỉ cảm xúc của con người. Cần sửa 'interested' thành 'interesting'."
      },
      {
        id: 35,
        text: "Question 35. The <u class='font-bold text-indigo-700'>final</u> football match <u class='font-bold text-indigo-700'>is</u> postponed last Sunday <u class='font-bold text-indigo-700'>due</u> to the <u class='font-bold text-indigo-700'>heavy</u> snowstorm.",
        options: ["A. is", "B. final", "C. due", "D. heavy"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Câu có trạng từ chỉ thời gian trong quá khứ 'last Sunday' (Chủ Nhật tuần trước) nên động từ phải chia ở thì Quá khứ đơn. Sửa 'is' thành 'was'."
      },
      {
        id: 36,
        text: "Question 36. Electric bikes <u class='font-bold text-indigo-700'>are becoming</u> increasingly <u class='font-bold text-indigo-700'>popular</u> nowadays <u class='font-bold text-indigo-700'>thanks</u> to <u class='font-bold text-indigo-700'>its</u> convenience.",
        options: ["A. its", "B. popular", "C. thanks", "D. are becoming"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Đại từ sở hữu phải tương ứng với danh từ nó thay thế. 'Electric bikes' là số nhiều nên đại từ sở hữu phải là 'their'. Sửa 'its' thành 'their'."
      },
      {
        id: 37,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-book-open-reader text-indigo-500 mr-2"></i>Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the best answer to each of the questions from 37 to 41.</h3>
            
            <div class="bg-white p-5 rounded-xl border border-indigo-50 text-slate-700">
              <p class="leading-relaxed text-justify mb-3 indent-6">
                Living in the countryside offers a quiet and peaceful lifestyle, away from the hustle and bustle of city life. Firstly, the countryside is known for its natural beauty. Rolling hills, lush green fields, and scenic landscapes are common sights. Residents can enjoy the beauty of nature, surrounded by fresh air and open spaces.
              </p>
              <p class="leading-relaxed text-justify mb-3 indent-6">
                Furthermore, life in the countryside is often slower-paced. There's less traffic and noise, allowing people to relax. It's common to see locals taking leisurely walks or enjoying picnics in the countryside.
              </p>
              <p class="leading-relaxed text-justify mb-3 indent-6">
                Despite the peaceful surroundings, living in the countryside can have its challenges. Amenities like shops and entertainment <u class="font-bold text-indigo-800">venues</u> may be farther away, requiring residents to travel to nearby towns for essentials. However, many people appreciate the sense of community in rural areas. Neighbours often know each other well. <u class="font-bold text-indigo-800">They</u> are willing to lend a helping hand when needed.
              </p>
              <p class="leading-relaxed text-justify indent-6">
                Overall, life in the countryside offers a simpler and more close-knit community lifestyle, where nature's beauty is highly appreciated.
              </p>
            </div>
          </div>
        `,
        text: "Question 37. The countryside is known for ________.",
        options: [
          "A. skyscrapers and busy streets",
          "B. natural beauty and scenic landscapes",
          "C. traffic and noise pollution",
          "D. shopping malls and entertainment centres"
        ],
        correct: 1,
        explanation: "<b>Giải thích:</b> Dựa vào câu thứ hai của đoạn 1: 'Firstly, the countryside is known for its natural beauty... scenic landscapes'. (Vùng nông thôn được biết đến với vẻ đẹp tự nhiên và phong cảnh đẹp).<br><b>* Từ vựng mở rộng:</b><br>- <b>scenic (adj):</b> có phong cảnh đẹp."
      },
      {
        id: 38,
        text: "Question 38. How would the pace of life in the countryside be described in the passage?",
        options: ["A. Slow-paced", "B. Hectic", "C. Fast-paced", "D. Chaotic"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Dựa vào câu đầu tiên đoạn 2: 'Furthermore, life in the countryside is often slower-paced.' (Hơn nữa, nhịp sống ở vùng quê thường chậm hơn).<br><b>* Từ vựng mở rộng:</b><br>- <b>hectic / fast-paced (adj):</b> bận rộn, hối hả."
      },
      {
        id: 39,
        text: "Question 39. The word 'venues' in the passage is closest in meaning to ________.",
        options: ["A. services", "B. accomodations", "C. places", "D. facilities"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Từ 'venues' mang nghĩa là địa điểm, nơi tổ chức (trong bài là entertainment venues - địa điểm giải trí). Đồng nghĩa với nó là 'places'.<br><b>* Từ vựng mở rộng:</b><br>- <b>facility (n):</b> cơ sở vật chất."
      },
      {
        id: 40,
        text: "Question 40. The word 'They' in the passage refers to ________.",
        options: ["A. residents", "B. areas", "C. towns", "D. neighbors"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Trong câu 'Neighbours often know each other well. They are willing...', đại từ 'They' thay thế cho danh từ 'Neighbours' (Những người hàng xóm) ngay phía trước.<br><b>* Từ vựng mở rộng:</b><br>- <b>lend a helping hand (idiom):</b> giúp đỡ ai đó."
      },
      {
        id: 41,
        text: "Question 41. The best title for this passage could be ________.",
        options: [
          "A. 'City Life versus Countryside Life'",
          "B. 'Entertainment Venues and Leisure Activities in Rural Areas'",
          "C. 'The Challenges of Rural Living'",
          "D. 'Natural Beauty and Community in the Countryside'"
        ],
        correct: 3,
        explanation: "<b>Giải thích:</b> Bài viết tập trung mô tả cảnh đẹp thiên nhiên (đoạn 1) và ý thức cộng đồng (đoạn 3, 4) của cuộc sống nông thôn. Đáp án D bao quát đầy đủ nhất các ý chính này."
      },
      {
        id: 42,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-link text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the word CLOSEST in meaning to the underlined word in the following question.</h3></div>`,
        text: "Question 42. It's <u class='font-bold text-indigo-700'>amazing</u> how much computers have come down in price over the past few years.",
        options: ["A. boring", "B. dangerous", "C. surprising", "D. awful"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Từ 'amazing' (đáng kinh ngạc, tuyệt vời) ĐỒNG NGHĨA với 'surprising' (đáng ngạc nhiên). Dịch: Thật đáng kinh ngạc khi giá máy tính đã giảm nhiều trong vài năm qua.<br><b>* Từ vựng mở rộng:</b><br>- <b>come down (phr.v):</b> giảm (giá cả)."
      },
      {
        id: 43,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-code-compare text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the sentence that is closest in meaning to each of the following questions.</h3></div>`,
        text: "Question 43. It is possible that the team will win the championship this year.",
        options: [
          "A. The team should win the championship this year.",
          "B. The team may win the championship this year.",
          "C. The team mustn't win the championship this year.",
          "D. The team needn't win the championship this year."
        ],
        correct: 1,
        explanation: "<b>Giải thích:</b> 'It is possible that...' (Có khả năng là...) dùng để diễn tả một sự việc có thể xảy ra, tương đương với động từ khuyết thiếu 'may / might' (có thể)."
      },
      {
        id: 44,
        text: "Question 44. He had his car serviced two years ago.",
        options: [
          "A. He had it serviced his car two years ago.",
          "B. He didn't have any service on his car two years ago.",
          "C. He hasn't had his car serviced for two years.",
          "D. He hadn't serviced his cars for two years then."
        ],
        correct: 2,
        explanation: "<b>Giải thích:</b> Câu gốc: 'Anh ấy đã mang xe đi bảo dưỡng 2 năm trước'. (Nghĩa là từ đó tới nay chưa bảo dưỡng lại). Dùng thì Hiện tại hoàn thành dạng phủ định: 'Anh ấy đã không mang xe đi bảo dưỡng ĐƯỢC 2 năm rồi' (hasn't had... for two years)."
      },
      {
        id: 45,
        text: "Question 45. My sister asked me, \"When will you be back from your trip?\"",
        options: [
          "A. My sister asked me when I will be back from my trip.",
          "B. My sister asked me when would I be back from my trip.",
          "C. My sister asked me when will I be back from my trip.",
          "D. My sister asked me when I would be back from my trip."
        ],
        correct: 3,
        explanation: "<b>Giải thích:</b> Khi chuyển sang câu gián tiếp có từ để hỏi: lùi thì (will -> would), đổi đại từ (you -> I), và phải KHÔNG đảo ngữ (phải là 'when I would be', không phải 'when would I be')."
      },
      {
        id: 46,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-book-open-reader text-indigo-500 mr-2"></i>Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the best answer to each of the questions from 46 to 50.</h3>
            
            <div class="bg-white p-5 rounded-xl border border-indigo-50 text-slate-700">
              <p class="leading-relaxed text-justify mb-3 indent-6">
                Education is very important for both individuals and society. It helps people learn how to think, solve problems, and understand the world.
              </p>
              <p class="leading-relaxed text-justify mb-3 indent-6">
                Today, education is not limited to traditional classrooms. Thanks to the Internet, we can learn in many new ways. Online courses, videos, and educational apps make it possible to study from home or anywhere with an Internet connection. Learning has become <u class="font-bold text-indigo-800">flexible</u> and available to everyone.
              </p>
              <p class="leading-relaxed text-justify mb-3 indent-6">
                Education also plays a big role in making society more equal. When everyone has the chance to go to school, it helps reduce the gap between people from different backgrounds. It gives everyone a fair chance to succeed, no matter where they come from or what their circumstances are. Educated people are better able to participate in their communities, vote, and make informed decisions. They can also get better jobs and contribute more to the economy.
              </p>
              <p class="leading-relaxed text-justify mb-3 indent-6">
                Moreover, education helps us understand different cultures and perspectives. <u class="font-bold text-indigo-800">It</u> promotes tolerance and understanding, which are important for peaceful and cooperative societies. Schools and teachers play a key role in teaching these values.
              </p>
              <p class="leading-relaxed text-justify indent-6">
                In the end, education is not just about learning facts or passing exams. It is about giving people the tools they need to follow their dreams, make good choices, and contribute positively to society. Educated individuals can think critically, solve problems, and innovate, which benefits everyone.
              </p>
            </div>
          </div>
        `,
        text: "Question 46. What is the main idea of the passage?",
        options: [
          "A. Traditional classrooms are becoming unimportant and outdated.",
          "B. Online learning is the best way to receive an education.",
          "C. Schools should focus only on teaching academic subjects.",
          "D. Education is crucial for personal growth and societal development."
        ],
        correct: 3,
        explanation: "<b>Giải thích:</b> Xuyên suốt bài đọc, tác giả nhấn mạnh tầm quan trọng của giáo dục đối với sự phát triển cá nhân (tư duy, giải quyết vấn đề) và xã hội (tạo sự bình đẳng, đóng góp kinh tế). Đáp án D bao hàm toàn bộ nội dung này.<br><b>* Từ vựng mở rộng:</b><br>- <b>crucial (adj):</b> cực kỳ quan trọng."
      },
      {
        id: 47,
        text: "Question 47. The word 'flexible' can be best replaced by ________",
        options: ["A. plastic", "B. adaptable", "C. lenient", "D. soft"],
        correct: 1,
        explanation: "<b>Giải thích:</b> 'Flexible' có nghĩa là linh hoạt, dễ thích nghi. Đồng nghĩa với nó là 'adaptable'.<br><b>* Từ vựng mở rộng:</b><br>- <b>lenient (adj):</b> khoan dung, dễ dãi."
      },
      {
        id: 48,
        text: "Question 48. The word 'It' in the passage refers to ________.",
        options: ["A. Gap", "B. Chance", "C. Education", "D. Economy"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Trong câu 'Moreover, education helps us... It promotes...', đại từ 'It' (nó) được dùng để thay thế cho danh từ 'education' (giáo dục) nằm ở câu phía trước.<br><b>* Từ vựng mở rộng:</b><br>- <b>promote (v):</b> thúc đẩy."
      },
      {
        id: 49,
        text: "Question 49. According to the passage, the ultimate goal of education is to ________.",
        options: [
          "A. help people pass their exams and have an equal chance to succeed",
          "B. help people memorize facts",
          "C. keep people from school as long as possible",
          "D. help people follow their dreams and contribute to society"
        ],
        correct: 3,
        explanation: "<b>Giải thích:</b> Dựa vào đoạn cuối: 'It is about giving people the tools they need to follow their dreams... and contribute positively to society.' (Đó là cung cấp cho mọi người công cụ họ cần để theo đuổi ước mơ... và đóng góp tích cực cho xã hội)."
      },
      {
        id: 50,
        text: "Question 50. What can be inferred about the impact of education on society, according to the passage?",
        options: [
          "A. Education has little effect on societal equality.",
          "B. Educated individuals are less likely to participate in their communities.",
          "C. Education fosters tolerance, understanding, and cooperation in society.",
          "D. Education primarily benefits wealthy individuals."
        ],
        correct: 2,
        explanation: "<b>Giải thích:</b> Dựa vào đoạn 4: 'It promotes tolerance and understanding, which are important for peaceful and cooperative societies.' Suy ra giáo dục thúc đẩy/nuôi dưỡng (foster) sự khoan dung, thấu hiểu và hợp tác trong xã hội.<br><b>* Từ vựng mở rộng:</b><br>- <b>foster (v):</b> bồi dưỡng, thúc đẩy.<br>- <b>tolerance (n):</b> sự khoan dung."
      }
    ]
  },
  "eng-na2023-211": {
    title: "Kỳ Thi Tuyển Sinh Vào Lớp 10 THPT (2023)",
    subtitle: "Sở GD&ĐT Nghệ An • Môn: Tiếng Anh • Mã đề: 211",
    subject: "Tiếng Anh",
    timeMinutes: 60,
    questions: [
      {
        id: 1,
        groupHtml: `<div class="mt-4 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-volume-high text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the word whose underlined part is pronounced differently from that of the others in each group.</h3></div>`,
        text: "Question 1.",
        options: ["A. <u class='font-bold text-indigo-600'>c</u>onstruction", "B. <u class='font-bold text-indigo-600'>c</u>amera", "C. <u class='font-bold text-indigo-600'>c</u>ompany", "D. <u class='font-bold text-indigo-600'>c</u>inema"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Chữ 'c' trong từ \"cinema\" được phát âm là /s/. Các từ còn lại được phát âm là /k/.<br><b>* Từ vựng mở rộng:</b><br>- <b>construction (n):</b> sự xây dựng."
      },
      {
        id: 2,
        text: "Question 2.",
        options: ["A. s<u class='font-bold text-indigo-600'>u</u>ch", "B. m<u class='font-bold text-indigo-600'>u</u>ch", "C. p<u class='font-bold text-indigo-600'>u</u>sh", "D. f<u class='font-bold text-indigo-600'>u</u>n"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Chữ 'u' trong từ \"push\" được phát âm là /ʊ/. Các từ còn lại được phát âm là /ʌ/."
      },
      {
        id: 3,
        text: "Question 3.",
        options: ["A. appoint<u class='font-bold text-indigo-600'>ed</u>", "B. visit<u class='font-bold text-indigo-600'>ed</u>", "C. decid<u class='font-bold text-indigo-600'>ed</u>", "D. damag<u class='font-bold text-indigo-600'>ed</u>"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Đuôi '-ed' trong \"damaged\" được phát âm là /d/ vì tận cùng bằng âm hữu thanh /dʒ/. Các từ còn lại tận cùng bằng âm /t/ hoặc /d/ nên phát âm là /ɪd/."
      },
      {
        id: 4,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-microphone-lines text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the word that differs from the other three in the position of stress in each of the following questions.</h3></div>`,
        text: "Question 4.",
        options: ["A. holiday", "B. attention", "C. balcony", "D. national"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Từ \"attention\" có trọng âm rơi vào âm tiết thứ 2 (/əˈtenʃn/). Các từ còn lại có trọng âm rơi vào âm tiết thứ 1."
      },
      {
        id: 5,
        text: "Question 5.",
        options: ["A. cartoon", "B. teacher", "C. letter", "D. student"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Từ \"cartoon\" có trọng âm rơi vào âm tiết thứ 2 (/kɑːˈtuːn/). Các từ còn lại có trọng âm rơi vào âm tiết thứ 1."
      },
      {
        id: 6,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-circle-check text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D to indicate the correct word or phrase to complete each of the sentences.</h3></div>`,
        text: "Question 6. Jack _______ the computer and checked his email.",
        options: ["A. took off", "B. turned on", "C. gave up", "D. made up"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Cụm động từ 'turn on' có nghĩa là bật (thiết bị điện tử). Dịch: Jack bật máy tính và kiểm tra email.<br><b>* Từ vựng mở rộng:</b><br>- <b>take off:</b> cất cánh / cởi (quần áo).<br>- <b>give up:</b> từ bỏ."
      },
      {
        id: 7,
        text: "Question 7. Hurricane Andrew swept through southern Florida _______ 1992.",
        options: ["A. for", "B. on", "C. at", "D. in"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Đi với năm (1992), ta bắt buộc phải dùng giới từ 'in'.<br><b>* Từ vựng mở rộng:</b><br>- <b>sweep through (phr.v):</b> càn quét qua."
      },
      {
        id: 8,
        text: "Question 8. Helen isn't good at Maths. She wishes she _______ it well.",
        options: ["A. studies", "B. studied", "C. is studying", "D. has studied"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Cấu trúc câu điều ước ở hiện tại (diễn tả một điều không có thật ở hiện tại): S + wish + S + V(quá khứ đơn). Do đó động từ 'study' phải chia thành 'studied'."
      },
      {
        id: 9,
        text: "Question 9. Her teacher was _______ at how quickly she came up with the answer.",
        options: ["A. surprise", "B. surprising", "C. surprised", "D. surprisingly"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Sau tobe 'was' cần một tính từ. Để miêu tả cảm xúc của con người (giáo viên cảm thấy ngạc nhiên), ta dùng tính từ đuôi '-ed' -> 'surprised'."
      },
      {
        id: 10,
        text: "Question 10. Your parents have just retired, _______?",
        options: ["A. haven't they", "B. have they", "C. don't they", "D. do they"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Câu hỏi đuôi. Mệnh đề chính ở thể khẳng định, dùng thì Hiện tại hoàn thành (have just retired). Do đó phần đuôi phải ở thể phủ định là 'haven't they'."
      },
      {
        id: 11,
        text: "Question 11. The manager reminded Jack _______ late for the meeting the next day.",
        options: ["A. to be not", "B. not be", "C. not to be", "D. don't be"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Cấu trúc: 'remind somebody (not) to do something' (nhắc nhở ai đó (không) làm việc gì). Dịch: Quản lý nhắc Jack không được đến muộn trong cuộc họp ngày hôm sau."
      },
      {
        id: 12,
        text: "Question 12. Tourists are impressed by the _______ of Ha Long Bay.",
        options: ["A. beauty", "B. beautify", "C. beautiful", "D. beautifully"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Sau mạo từ 'the' ta cần một danh từ. 'beauty' (vẻ đẹp) là danh từ. Dịch: Du khách bị ấn tượng bởi vẻ đẹp của Vịnh Hạ Long."
      },
      {
        id: 13,
        text: "Question 13. Ba is _______ than any other student in his class.",
        options: ["A. much taller", "B. much tall", "C. the tallest", "D. as tall"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Dấu hiệu nhận biết 'than' -> cấu trúc so sánh hơn. 'taller' là hình thức so sánh hơn của tính từ ngắn. Dùng 'much' phía trước để nhấn mạnh (cao hơn rất nhiều)."
      },
      {
        id: 14,
        text: "Question 14. A newspaper which is published every day is called a _______ newspaper.",
        options: ["A. yearly", "B. monthly", "C. daily", "D. weekly"],
        correct: 2,
        explanation: "<b>Giải thích:</b> 'published every day' (được xuất bản mỗi ngày) đồng nghĩa với tính từ 'daily' (hằng ngày)."
      },
      {
        id: 15,
        text: "Question 15. The Smiths _______ live in the countryside before they moved to this city.",
        options: ["A. used to", "B. is used to", "C. uses to", "D. was used to"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Cấu trúc 'used to + V' dùng để diễn tả một thói quen hoặc hành động thường xuyên xảy ra trong quá khứ nhưng nay không còn nữa. Gia đình Smith đã từng sống ở nông thôn."
      },
      {
        id: 16,
        text: "Question 16. The population of that area has _______ from 22,000 to 25,000 over the past 2 years.",
        options: ["A. increased", "B. decreased", "C. reduced", "D. improved"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Dân số thay đổi từ 22.000 lên 25.000, tức là đã tăng lên. 'increased' mang nghĩa là tăng.<br><b>* Từ vựng mở rộng:</b><br>- <b>decrease / reduce (v):</b> giảm xuống."
      },
      {
        id: 17,
        text: "Question 17. We're going to consolidate at we've learnt so far by _______ some exercises today.",
        options: ["A. making", "B. doing", "C. performing", "D. putting"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Cụm từ cố định (Collocation): 'do exercises' (làm bài tập).<br><b>* Từ vựng mở rộng:</b><br>- <b>consolidate (v):</b> củng cố, cắm chắc."
      },
      {
        id: 18,
        text: "Question 18. A new bridge _______ across the river by these workers last year.",
        options: ["A. built", "B. was built", "C. builds", "D. has built"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Dấu hiệu 'last year' -> thì Quá khứ đơn. Chủ ngữ 'A new bridge' là vật, và có 'by these workers' -> câu bị động. Cấu trúc: S + was/were + VpII -> 'was built'."
      },
      {
        id: 19,
        text: "Question 19. I can't work effectively at home _______ it is too noisy.",
        options: ["A. in spite of", "B. because", "C. although", "D. because of"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Mệnh đề phía sau ('it is too noisy') chỉ nguyên nhân và là một mệnh đề hoàn chỉnh (S + V) nên ta dùng liên từ 'because' (bởi vì)."
      },
      {
        id: 20,
        text: "Question 20. My children enjoy _______ about wild animals and natural mysteries.",
        options: ["A. to read", "B. read", "C. reading", "D. to reading"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Cấu trúc: 'enjoy + V-ing' (thích làm việc gì đó). Do đó ta chọn 'reading'."
      },
      {
        id: 21,
        text: "Question 21. He's really got the bit between his _______ so that he can pass the exam with flying colours.",
        options: ["A. teeth", "B. eyes", "C. ears", "D. feet"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Thành ngữ (Idiom): 'get the bit between one's teeth' có nghĩa là quyết tâm làm việc gì đó một cách hăng hái, không chùn bước.<br><b>* Từ vựng mở rộng:</b><br>- <b>with flying colours (idiom):</b> đạt kết quả mĩ mãn/xuất sắc."
      },
      {
        id: 22,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-link text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the word CLOSEST in meaning to the underlined word in each of the following questions.</h3></div>`,
        text: "Question 22. Many people left the cinema early because the film was <u class='font-bold text-indigo-700'>boring</u>.",
        options: ["A. fascinating", "B. uninteresting", "C. exciting", "D. surprising"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Từ 'boring' (nhàm chán) ĐỒNG NGHĨA với 'uninteresting' (không thú vị). Các từ fascinating và exciting mang nghĩa trái ngược (thú vị, hào hứng)."
      },
      {
        id: 23,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-arrows-left-right-to-line text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the word OPPOSITE in meaning to the underlined word in each of the following questions.</h3></div>`,
        text: "Question 23. We need to find ways of producing energy without <u class='font-bold text-indigo-700'>destroying</u> the environment.",
        options: ["A. changing", "B. protecting", "C. creating", "D. damaging"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Từ 'destroying' (phá hủy) TRÁI NGHĨA với 'protecting' (bảo vệ).<br><b>* Từ vựng mở rộng:</b><br>- <b>damaging (v-ing):</b> gây tổn hại (đồng nghĩa với từ gốc)."
      },
      {
        id: 24,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-comments text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the sentence that best completes each of the following exchanges.</h3></div>`,
        text: "Question 24. Nick and Mary are at their office.<br>- Mike: \"Thank you for your advice, Mary.\"<br>- Mary: \"________?\"",
        options: ["A. Have a good day", "B. Same to you", "C. Good idea", "D. You're welcome"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Khi nhận được lời cảm ơn ('Thank you...'), cách đáp lại phổ biến và lịch sự nhất là 'You're welcome' (Không có chi)."
      },
      {
        id: 25,
        text: "Question 25. John is talking with Peter, his classmate.<br>- John: \"Would you like to go out for dinner with my family?\"<br>- Peter: \"________.\"",
        options: ["A. I agree with you", "B. Yes, I'd love to", "C. Never mind", "D. That's right"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Lời mời 'Would you like to...?' (Bạn có muốn...) thường được đáp lại bằng sự đồng ý một cách hào hứng: 'Yes, I'd love to' (Vâng, mình rất thích)."
      },
      {
        id: 26,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-magnifying-glass-chart text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the underlined part that needs correction in each of the following questions.</h3></div>`,
        text: "Question 26. Jane <u class='font-bold text-indigo-700'>listens usually</u> to <u class='font-bold text-indigo-700'>pop</u> music <u class='font-bold text-indigo-700'>when</u> she has <u class='font-bold text-indigo-700'>free</u> time.",
        options: ["A. listens usually", "B. pop", "C. when", "D. free"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Trạng từ chỉ tần suất (usually) phải đứng TRƯỚC động từ thường. Sửa thành: 'usually listens'."
      },
      {
        id: 27,
        text: "Question 27. The <u class='font-bold text-indigo-700'>number</u> of people working <u class='font-bold text-indigo-700'>in</u> agriculture <u class='font-bold text-indigo-700'>falls</u> in the last <u class='font-bold text-indigo-700'>decade</u>.",
        options: ["A. number", "B. in", "C. falls", "D. decade"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Dấu hiệu thời gian 'in the last decade' (trong thập kỷ vừa qua, kéo dài tới hiện tại) yêu cầu sử dụng thì Hiện tại hoàn thành. Sửa 'falls' thành 'has fallen'."
      },
      {
        id: 28,
        text: "Question 28. I <u class='font-bold text-indigo-700'>think</u> that the talk about <u class='font-bold text-indigo-700'>American</u> movies is <u class='font-bold text-indigo-700'>both</u> informative and <u class='font-bold text-indigo-700'>entertained</u>.",
        options: ["A. think", "B. American", "C. both", "D. entertained"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Tính từ đuôi -ing dùng để miêu tả bản chất của sự vật/sự việc (the talk - buổi nói chuyện mang tính giải trí). Tính từ đuôi -ed thường dùng chỉ cảm giác. Cần sửa 'entertained' thành 'entertaining'."
      },
      {
        id: 29,
        text: "Question 29. Our <u class='font-bold text-indigo-700'>new</u> colleague is <u class='font-bold text-indigo-700'>self-educated</u>, hard-working, <u class='font-bold text-indigo-700'>energetic</u>, and <u class='font-bold text-indigo-700'>always tells the truth</u>.",
        options: ["A. new", "B. self-educated", "C. energetic", "D. always tells the truth"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Cấu trúc song song (Parallel structure). Phía trước là loạt tính từ chỉ phẩm chất, nên vế sau chữ 'and' cũng phải là một tính từ. Sửa mệnh đề 'always tells the truth' thành tính từ như 'honest' hoặc 'truthful'."
      },
      {
        id: 30,
        text: "Question 30. There <u class='font-bold text-indigo-700'>are</u> only one task <u class='font-bold text-indigo-700'>that</u> we <u class='font-bold text-indigo-700'>need</u> to <u class='font-bold text-indigo-700'>complete</u> today.",
        options: ["A. are", "B. that", "C. need", "D. complete"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Chủ ngữ của câu là 'only one task' (số ít), do đó động từ tobe phải chia số ít. Sửa 'are' thành 'is'."
      },
      {
        id: 31,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-code-compare text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the sentence that is closest in meaning to each of the following questions.</h3></div>`,
        text: "Question 31. It is two weeks since she last called me.",
        options: [
          "A. She has called me for two weeks.",
          "B. She did not call me for two weeks ago.",
          "C. She has not called me for two weeks.",
          "D. She called me for two weeks."
        ],
        correct: 2,
        explanation: "<b>Giải thích:</b> Cấu trúc tương đương: 'It is + thời gian + since + S + last + V-ed' (Đã bao lâu kể từ lần cuối làm gì) = 'S + has/have not + VpII + for + thời gian' (Ai đó đã không làm gì trong khoảng thời gian bao lâu)."
      },
      {
        id: 32,
        text: "Question 32. It is inadvisable for us to attempt to do this ourselves.",
        options: [
          "A. We shouldn't attempt to do this ourselves.",
          "B. We might attempt to do this ourselves.",
          "C. We must attempt to do this ourselves.",
          "D. We needn't attempt to do this ourselves."
        ],
        correct: 0,
        explanation: "<b>Giải thích:</b> 'It is inadvisable' (Không nên làm gì) mang ý khuyên bảo, tương đương với động từ khuyết thiếu 'shouldn't'. Dịch: Chúng ta không nên cố gắng tự làm điều này."
      },
      {
        id: 33,
        text: "Question 33. Tom asked his classmate: \"Are you joining us for the party this weekend?\"",
        options: [
          "A. Tom asked his classmate if he is joining them for the party that weekend.",
          "B. Tom asked his classmate if was he joining them for the party that weekend.",
          "C. Tom asked his classmate if he was joining them for the party that weekend.",
          "D. Tom asked his classmate if is he joining them for the party that weekend."
        ],
        correct: 2,
        explanation: "<b>Giải thích:</b> Chuyển câu hỏi Yes/No sang gián tiếp: thêm 'if/whether', không đảo ngữ (đổi are you -> he was), lùi thì (hiện tại tiếp diễn -> quá khứ tiếp diễn), đổi đại từ (us -> them), và đổi trạng từ thời gian (this -> that). Chỉ đáp án C thỏa mãn."
      },
      {
        id: 34,
        groupHtml: `<div class="mt-8 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-link text-indigo-500"></i><h3 class="font-bold text-slate-800 text-base">Mark the letter A, B, C, or D on your answer sheet to indicate the sentence that best combines each pair of sentences in the following questions.</h3></div>`,
        text: "Question 34. The taxi driver is friendly. He took me to the airport yesterday.",
        options: [
          "A. The taxi driver who took me to the airport yesterday is friendly.",
          "B. The taxi driver which took me to the airport yesterday is friendly.",
          "C. The taxi driver whom took me to the airport yesterday is friendly.",
          "D. The taxi driver is friendly who took me to the airport yesterday."
        ],
        correct: 0,
        explanation: "<b>Giải thích:</b> Sử dụng đại từ quan hệ 'who' thay thế cho danh từ chỉ người 'The taxi driver' để làm chủ ngữ cho mệnh đề quan hệ ('who took me...'). Đáp án C sai vì 'whom' làm tân ngữ, D sai vì vị trí mệnh đề quan hệ."
      },
      {
        id: 35,
        text: "Question 35. He smokes too much. He can't get rid of his cough.",
        options: [
          "A. If he didn't smoke so much, he could get rid of his cough.",
          "B. If he smokes smoke so much, he can't get rid of his cough.",
          "C. If he didn't smoke so much, he can get rid of his cough.",
          "D. If he smoked so much, he could get rid of his cough."
        ],
        correct: 0,
        explanation: "<b>Giải thích:</b> Sự thật ở hiện tại: 'Anh ấy hút thuốc quá nhiều'. Giả định một điều trái ngược với hiện tại bằng câu điều kiện loại 2: 'Nếu anh ấy không hút thuốc nhiều như vậy, anh ấy đã có thể hết ho.' Cấu trúc: If + S + V(quá khứ đơn), S + could/would + V."
      },
      {
        id: 36,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-file-pen text-indigo-500 mr-2"></i>Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the correct word or phrase that best fits each of the numbered blanks from 36 to 40.</h3>
            
            <div class="bg-white p-5 rounded-xl border border-indigo-50 text-slate-700 leading-relaxed text-justify">
              <p class="mb-3 indent-6">
                One electronic device that I find extremely <b class="text-indigo-700">(36) ________</b> in my daily life is my smartphone. It's an essential tool <b class="text-indigo-700">(37) ________</b> allows me to stay connected with friends, family, and colleagues. I use it to make phone calls, send text messages, and check my email on the go.
              </p>
              <p class="mb-3 indent-6">
                It's also my primary camera for <b class="text-indigo-700">(38) ________</b> photos and recording videos. In addition to these basic functions, my smartphone is loaded with a variety of apps that help me <b class="text-indigo-700">(39) ________</b> everything from navigation to productivity.
              </p>
              <p class="indent-6">
                Whether I need to book a ride, order food, or check the weather, my smartphone is always there to help me get things done quickly and efficiently. I can't <b class="text-indigo-700">(40) ________</b> going a day without it!
              </p>
            </div>
          </div>
        `,
        text: "Question 36.",
        options: ["A. useless", "B. usefully", "C. useful", "D. use"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Cấu trúc 'find + something/someone + Adjective' (cảm thấy cái gì/ai đó như thế nào). Ta dùng tính từ 'useful' (hữu ích) để bổ nghĩa cho 'my smartphone'."
      },
      {
        id: 37,
        text: "Question 37.",
        options: ["A. who", "B. which", "C. where", "D. what"],
        correct: 1,
        explanation: "<b>Giải thích:</b> Cần đại từ quan hệ thay thế cho danh từ chỉ vật 'an essential tool' đóng vai trò chủ ngữ. Ta dùng 'which'."
      },
      {
        id: 38,
        text: "Question 38.",
        options: ["A. showing", "B. making", "C. taking", "D. catching"],
        correct: 2,
        explanation: "<b>Giải thích:</b> Cụm từ cố định: 'take photos' (chụp ảnh). Sau giới từ 'for', động từ ở dạng V-ing -> 'taking'."
      },
      {
        id: 39,
        text: "Question 39.",
        options: ["A. with", "B. for", "C. on", "D. of"],
        correct: 0,
        explanation: "<b>Giải thích:</b> Cấu trúc 'help somebody with something' (giúp ai việc gì). Dịch: ...những ứng dụng giúp tôi với mọi việc từ định vị đến hiệu suất công việc."
      },
      {
        id: 40,
        text: "Question 40.",
        options: ["A. guess", "B. think", "C. help", "D. imagine"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Cấu trúc 'imagine + V-ing' (tưởng tượng về việc gì). Dịch: Tôi không thể tưởng tượng được việc trải qua một ngày mà không có nó!<br><b>* Từ vựng mở rộng:</b><br>- <b>efficiently (adv):</b> một cách hiệu quả."
      },
      {
        id: 41,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-book-open-reader text-indigo-500 mr-2"></i>Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the questions from 41 to 45.</h3>
            
            <div class="bg-white p-5 rounded-xl border border-indigo-50 text-slate-700">
              <p class="leading-relaxed text-justify mb-3 indent-6">
                Last weekend, there was a soccer match in the city park. Two local teams, the Ventures and the Airbobs, competed against each other. Many people came to watch the game and cheer for their favorite team. The match started at 3 p.m and came to an end at 4 p.m. The Ventures wore blue jerseys, while the Airbobs wore yellow jerseys. The Ventures played very well and scored two goals, while the Airbobs scored only one goal. The crowd was excited and cheered loudly whenever a goal was scored.
              </p>
              <p class="leading-relaxed text-justify mb-3 indent-6">
                The weather was perfect for the game. The sun was shining, and there was a gentle breeze. The players ran fast and showed great skill in passing and shooting the ball. The referee did a good job of keeping the game fair and making sure all the rules were followed. At half-time, the teams took a short break to rest and hydrate. The spectators used this time to buy snacks and drinks from the food stalls near the field. Some children played soccer themselves in the nearby playground, imitating their favorite players.
              </p>
              <p class="leading-relaxed text-justify indent-6">
                In the second half of the game, both teams fought hard to score more goals. The Ventures were determined to keep their lead, while the Airbobs were eager to catch up. The players were exhausted, but they didn't give up. Finally, when the whistle blew, the Ventures won the match with a score of 2-1.
              </p>
            </div>
          </div>
        `,
        text: "Question 41. Where did the Ventures and the Airbobs compete against each other?",
        options: [
          "A. in the city stadium",
          "B. in the playground",
          "C. on the beach",
          "D. in the city park"
        ],
        correct: 3,
        explanation: "<b>Giải thích:</b> Dựa vào câu đầu tiên: \"Last weekend, there was a soccer match in the city park.\" (Cuối tuần trước, có một trận đấu bóng đá ở công viên thành phố)."
      },
      {
        id: 42,
        text: "Question 42. The match lasted for _______.",
        options: ["A. three hours", "B. four hours", "C. two hours", "D. one hour"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Dựa vào câu: \"The match started at 3 p.m and came to an end at 4 p.m.\" (Trận đấu bắt đầu lúc 3 giờ chiều và kết thúc lúc 4 giờ chiều). Do vậy nó kéo dài 1 tiếng đồng hồ."
      },
      {
        id: 43,
        text: "Question 43. The word \"jerseys\" in paragraph 2 mostly means \"shirts worn by the people who _______\".",
        options: [
          "A. cheered for their favorite team",
          "B. played a sports game",
          "C. watched a sports event",
          "D. controlled a sports game"
        ],
        correct: 1,
        explanation: "<b>Giải thích:</b> \"jerseys\" (áo thi đấu) là loại áo dành cho cầu thủ - những người tham gia chơi thể thao (played a sports game).<br><i>Lưu ý: Đáp án chính thức theo mã đề này có thể có sai sót in ấn, nhưng B là đáp án chính xác nhất về mặt logic và ngữ nghĩa.</i>"
      },
      {
        id: 44,
        text: "Question 44. What did the spectators do during half-time?",
        options: [
          "A. They watched the players practice.",
          "B. They bought snacks and drinks.",
          "C. They played soccer in the nearby playground.",
          "D. They rested and hydrated."
        ],
        correct: 1,
        explanation: "<b>Giải thích:</b> Dựa vào câu: \"The spectators used this time to buy snacks and drinks from the food stalls...\" (Khán giả dành thời gian này để mua đồ ăn nhẹ và thức uống).<br><b>* Từ vựng mở rộng:</b><br>- <b>spectator (n):</b> khán giả (xem thể thao trực tiếp)."
      },
      {
        id: 45,
        text: "Question 45. The word \"they\" in the last paragraph refers to _______.",
        options: [
          "A. the Ventures",
          "B. the Airbobs",
          "C. the spectators",
          "D. the players"
        ],
        correct: 3,
        explanation: "<b>Giải thích:</b> Trong câu \"The players were exhausted, but they didn't give up.\" (Các cầu thủ đã kiệt sức, nhưng họ không bỏ cuộc), đại từ \"they\" thay thế cho danh từ \"the players\"."
      },
      {
        id: 46,
        groupHtml: `
          <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-6 mt-10 shadow-sm relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
            <h3 class="font-bold text-indigo-900 mb-4 text-[15px]"><i class="fa-solid fa-book-open-reader text-indigo-500 mr-2"></i>Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the questions from 46 to 50.</h3>
            
            <div class="bg-white p-5 rounded-xl border border-indigo-50 text-slate-700">
              <p class="leading-relaxed text-justify mb-3 indent-6">
                Being fluent in more than one language has numerous advantages that extend beyond communication. Multilingualism offers cognitive, social, and professional benefits, making it a valuable skill in today's interconnected world.
              </p>
              <p class="leading-relaxed text-justify mb-3 indent-6">
                One of the cognitive benefits of multilingualism is improved memory and attention. Learning and switching between different languages exercises the brain, enhancing its ability to remember and process information. Multilingual individuals often display better problem-solving skills and increased mental flexibility. In terms of social benefits, being multilingual allows for better cross-cultural understanding and empathy. Language is closely tied to culture, and by speaking multiple languages, individuals gain insights into different cultural perspectives. This promotes tolerance, open-mindedness, and the ability to connect with people from diverse backgrounds. Professionally, being multilingual opens up a world of opportunities. In an increasingly globalized job market, employers value individuals who can communicate effectively with international partners and clients. Multilingual employees are often sought after in industries such as tourism, diplomacy, and international business. Moreover, learning multiple languages can boost academic performance. Research has shown that multilingual students tend to have better problem-solving skills, enhanced creativity, and improved overall academic achievement.
              </p>
              <p class="leading-relaxed text-justify indent-6">
                While learning multiple languages requires dedication and effort, the benefits are well worth it. It not only broadens one's horizons but also contributes to personal growth and understanding of the world.
              </p>
            </div>
          </div>
        `,
        text: "Question 46. What can be the title of the passage?",
        options: [
          "A. The Cognitive Benefits of Multilingualism",
          "B. The Benefits of Multilingualism",
          "C. Multilingualism in the Globalized Job Market",
          "D. How to Become Multilingual"
        ],
        correct: 1,
        explanation: "<b>Giải thích:</b> Bài viết khái quát ba lợi ích chính của sự đa ngôn ngữ: nhận thức (cognitive), xã hội (social) và công việc/học thuật (professional/academic). Do đó \"The Benefits of Multilingualism\" là tiêu đề bao quát nhất."
      },
      {
        id: 47,
        text: "Question 47. The word \"it\" in the first paragraph refers to _______.",
        options: ["A. advantage", "B. communication", "C. language", "D. multilingualism"],
        correct: 3,
        explanation: "<b>Giải thích:</b> Trong câu \"Multilingualism offers... making it a valuable skill...\" (Sự đa ngôn ngữ mang lại... biến nó thành một kỹ năng giá trị...), đại từ \"it\" thay thế cho \"Multilingualism\"."
      },
      {
        id: 48,
        text: "Question 48. What cognitive advantage does multilingualism offer?",
        options: [
          "A. Increased creativity and artistic skills",
          "B. Enhanced memory and attention",
          "C. Improved physical fitness",
          "D. Greater musical abilities"
        ],
        correct: 1,
        explanation: "<b>Giải thích:</b> Dựa vào câu đầu của đoạn 2: \"One of the cognitive benefits of multilingualism is improved memory and attention.\" (Một trong những lợi ích nhận thức... là cải thiện trí nhớ và sự chú ý)."
      },
      {
        id: 49,
        text: "Question 49. It can be inferred from the passage that multilingual individuals are in high demand in the professional fields of _______.",
        options: [
          "A. education and healthcare",
          "B. international business and law",
          "C. technology and diplomacy",
          "D. tourism and diplomacy"
        ],
        correct: 3,
        explanation: "<b>Giải thích:</b> Dựa vào câu: \"Multilingual employees are often sought after in industries such as tourism, diplomacy, and international business.\" (được săn đón trong các ngành như du lịch, ngoại giao...)."
      },
      {
        id: 50,
        text: "Question 50. Which of the following statements is TRUE according to the passage?",
        options: [
          "A. Multilingualism fosters cross-cultural understanding and empathy.",
          "B. Being multilingual does not bring people a lot of job opportunities.",
          "C. Multilingual individuals often show increased physical flexibility.",
          "D. It needs little effort and dedication to learn multiple languages."
        ],
        correct: 0,
        explanation: "<b>Giải thích:</b> Dựa vào đoạn 2: \"...being multilingual allows for better cross-cultural understanding and empathy.\" (cho phép thấu hiểu đa văn hóa và sự đồng cảm tốt hơn).<br><b>* Từ vựng mở rộng:</b><br>- <b>empathy (n):</b> sự đồng cảm."
      }
    ]
  }
};
