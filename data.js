const EXAM_DATABASE = {
    // ĐỀ SỐ 1: TIẾNG ANH SÓC SƠN
    "eng-soc-son-108": {
        title: "Kỳ Thi Thử Lớp 10",
        subtitle: "Môn: Tiếng Anh (Mã đề 108)",
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
                ], correct: 2
            },
            {
                id: 2, text: "Question 2. Put the sentences (a-c) in the correct order, and then fill in the blank to make a logical text.<br><span class='text-sm text-slate-500 font-normal mt-2 block p-3 bg-slate-50 rounded-lg border border-slate-100'>a. Before you share a warning online, check the source and the date carefully.<br>b. If you feel unsure, ask a teacher, neighbor, or local officer for guidance.<br>c. Saving emergency numbers in your phone helps you confirm news quickly.</span>",
                options: ["A. b - a - c", "B. c - a - b", "C. a - c - b", "D. c - b - a"], correct: 1
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
                id: 3, text: "Question 3.", options: ["A. rarely is", "B. rarely isn't", "C. is rarely", "D. isn't rarely"], correct: 2
            },
            { id: 4, text: "Question 4.", options: ["A. Any other apps", "B. Another app", "C. Many other apps", "D. The other apps"], correct: 2 },
            { id: 5, text: "Question 5.", options: ["A. on which make", "B. that can make", "C. which can make", "D. that makes on"], correct: 2 },
            { id: 6, text: "Question 6.", options: ["A. Therefore", "B. Meanwhile", "C. In contrast", "D. Moreover"], correct: 2 },
            { id: 7, text: "Question 7.", options: ["A. do", "B. take", "C. make", "D. give"], correct: 1 },
            { id: 8, text: "Question 8.", options: ["A. may", "B. can", "C. should", "D. might"], correct: 2 },
            
            {
                groupHtml: `<div class="mt-10 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-circle-check text-indigo-500"></i><h3 class="font-bold text-slate-800 uppercase tracking-wide text-sm">Mark the letter A, B, C or D to indicate the correct answer (9-16)</h3></div>`,
                id: 9, text: "Question 9. The problem of _________ among young people is hard to solve.", options: ["A. employers", "B. unemployed", "C. unemploying", "D. unemployment"], correct: 3
            },
            { id: 10, text: "Question 10. If Alex _________ up the word in the dictionary, he _________ its meaning.", options: ["A. looks / won't know", "B. looks / will know", "C. looks / would know", "D. looked / will know"], correct: 1 },
            { id: 11, text: "Question 11. There _________ a beautiful park near the river for decades, and it _________ many visitors every weekend.", options: ["A. was / attracted", "B. has been / attracts", "C. have been / attracts", "D. is / attracted"], correct: 1 },
            { id: 12, text: "Question 12. For our science project, we had to _________ a simple idea to save electricity at home.", options: ["A. go over", "B. pick up", "C. put up with", "D. come up with"], correct: 3 },
            { id: 13, text: "Question 13. He runs _________ we expected. Therefore, he won the race.", options: ["A. more fastly than", "B. more fast than", "C. faster than", "D. as fastly as"], correct: 2 },
            { id: 14, text: "Question 14. Jane asks for permission to open the door and Bob responds.<br><span class='block mt-2 text-indigo-900 bg-indigo-50/50 p-2 rounded-lg'>Jane: \"Excuse me, do you mind if I open the door? It's a bit stuffy here.\"<br>Bob: \"_________\"</span>", options: ["A. Not at all. Go ahead.", "B. Sure, you can't open it.", "C. No, I want you not to open it.", "D. Never mind. That would be great!"], correct: 0 },
            { id: 15, text: "Question 15. _________ rich benefit the most from advanced technology, while _________ poor often struggle to access it.", options: ["A. The/ a", "B. A/ the", "C. A/ a", "D. The/ the"], correct: 3 },
            { id: 16, text: "Question 16. Jane _________ be an avid tennis player, but her busy schedule prevents regular practice.", options: ["A. wasn't used to", "B. isn't used to", "C. didn't use to", "D. used to"], correct: 3 },

            {
                groupHtml: `<div class="mt-10 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-arrows-turn-to-dots text-indigo-500"></i><h3 class="font-bold text-slate-800 uppercase tracking-wide text-sm">Mark the letter A, B, C or D to indicate the sentence that is closest in meaning (17-18)</h3></div>`,
                id: 17, text: "Question 17. She asked me where I had bought my dress 2 days before.", options: [
                    "A. She said: \"Where do you buy your dress 2 days later?\"",
                    "B. She said: \"Where have you bought your dress 2 days before?\"",
                    "C. She asked: \"Where did you buy your dress 2 days ago?\"",
                    "D. She asked: \"Where had you bought my dress 2 days ago?\""
                ], correct: 2
            },
            {
                id: 18, text: "Question 18. I think we should raise money to restore our aging man-made wonders.", options: [
                    "A. I suggest raising money to restore our aging man-made wonders.",
                    "B. I suggest we could raise money to restore our aging man-made wonders.",
                    "C. I suggest to raise money to restore our aging man-made wonders.",
                    "D. I suggested that we should raise money to restore our aging man-made wonders."
                ], correct: 0
            },

            {
                groupHtml: `<div class="mt-10 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-layer-group text-indigo-500"></i><h3 class="font-bold text-slate-800 uppercase tracking-wide text-sm">Mark the letter A, B, C or D to indicate the sentence that is best made from the given cues (19-20)</h3></div>`,
                id: 19, text: "Question 19. The dishes / my aunt / cook / party / last week / be / delicious.", options: [
                    "A. The dishes which my aunt cooked for the party last week was delicious.",
                    "B. The dishes that my aunt was cooking for the party last week were delicious.",
                    "C. The dishes which my aunt cooks for the party last week are delicious.",
                    "D. The dishes that my aunt cooked for the party last week were delicious."
                ], correct: 3
            },
            {
                id: 20, text: "Question 20. Sometimes / my sister/ I/ wish/ parents/ put/ themselves/ shoes.", options: [
                    "A. Sometimes my sister and I wish our parents can put themselves in their shoes.",
                    "B. Sometimes my sister and I wish our parents could put themselves in our shoes.",
                    "C. Sometimes my sister and I wish my parents would put themselves on our shoes.",
                    "D. Sometimes my sister or I wish our parents put themselves in their shoes."
                ], correct: 1
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
                ], correct: 3
            },
            { id: 22, text: "Question 22. The word \"preserve\" in paragraph 2 is OPPOSITE meaning to ______.", options: ["A. change", "B. forget", "C. protect", "D. destroy"], correct: 3 },
            { id: 23, text: "Question 23. Which of the following is NOT mentioned as a reason why fewer young people learn water puppetry today?", options: ["A. Older puppet masters pass away.", "B. Learners have to experience long and difficult training.", "C. Modern entertainment is more attractive to them.", "D. They move to cities to earn more money."], correct: 0 },
            { id: 24, text: "Question 24. The word \"flourished\" in paragraph 3 is CLOSEST in meaning to ______.", options: ["A. grew strongly", "B. started early", "C. developed slowly", "D. moved quickly"], correct: 0 },
            { id: 25, text: "Question 25. Which of the following is TRUE about water puppetry in Vietnam at present?", options: ["A. It attracts more young performers now than in the past decades.", "B. It is mainly kept alive through tourism rather than traditional village practices.", "C. It has completely disappeared from all Vietnamese villages except Hanoi.", "D. It has successfully adapted to modern entertainment without losing its traditions."], correct: 1 },
            { id: 26, text: "Question 26. Which statement best reflects the passage's view about saving water puppetry for the future?", options: ["A. It will survive naturally because it has existed for over a thousand years.", "B. It should stay exactly the same, even if fewer people watch it.", "C. It needs to adapt to modern times while keeping its traditional spirit.", "D. It can only be saved if young people stop using social media and games."], correct: 2 },

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
                id: 27, isHidden: true, correct: 2 
            },
            { id: 28, isHidden: true, correct: 3 },
            { id: 29, isHidden: true, correct: 1 },
            { id: 30, isHidden: true, correct: 0 },

            {
                groupHtml: `<div class="mt-10 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-signs-post text-indigo-500"></i><h3 class="font-bold text-slate-800 uppercase tracking-wide text-sm">Read the following notices/messages and mark the correct answer (31-32)</h3></div>`,
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
                ], correct: 0
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
                ], correct: 0
            },

            {
                groupHtml: `<div class="mt-10 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-volume-high text-indigo-500"></i><h3 class="font-bold text-slate-800 uppercase tracking-wide text-sm">Mark the letter A, B, C, or D to indicate the word that differs from the other three in the position of primary stress (33-34)</h3></div>`,
                id: 33, text: "Question 33.", options: ["A. candidate", "B. reference", "C. requirement", "D. paradise"], correct: 2 },
            { id: 34, text: "Question 34.", options: ["A. preserve", "B. balance", "C. suburb", "D. schedule"], correct: 0 },

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
                id: 35, text: "Question 35.", options: ["A. with", "B. on", "C. in", "D. at"], correct: 1 },
            { id: 36, text: "Question 36.", options: ["A. routine", "B. regulation", "C. lifestyle", "D. carbon footprint"], correct: 3 },
            { id: 37, text: "Question 37.", options: ["A. many", "B. all", "C. every", "D. most"], correct: 2 },
            { id: 38, text: "Question 38.", options: ["A. volunteers", "B. visitors", "C. customers", "D. passengers"], correct: 0 },

            {
                groupHtml: `<div class="mt-10 mb-5 pb-2 border-b-2 border-slate-200 flex items-center gap-2"><i class="fa-solid fa-comment-dots text-indigo-500"></i><h3 class="font-bold text-slate-800 uppercase tracking-wide text-sm">Mark the letter A, B, C, or D to indicate the word whose underlined part differs from the other three in pronunciation (39-40)</h3></div>`,
                id: 39, text: "Question 39.", options: ["A. <u class='text-indigo-600 font-bold'>i</u>tinerary", "B. tour<u class='text-indigo-600 font-bold'>i</u>sm", "C. pun<u class='text-indigo-600 font-bold'>i</u>sh", "D. safar<u class='text-indigo-600 font-bold'>i</u>"], correct: 0 },
            { id: 40, text: "Question 40.", options: ["A. laugh<u class='text-indigo-600 font-bold'>ed</u>", "B. lik<u class='text-indigo-600 font-bold'>ed</u>", "C. pleas<u class='text-indigo-600 font-bold'>ed</u>", "D. wash<u class='text-indigo-600 font-bold'>ed</u>"], correct: 2 }
        ]
    },

    // ==========================================
    // ĐỀ SỐ 2, SỐ 3... (Sếp cứ Copy khối trên paste xuống đây)
    // ==========================================
    "eng-demo-02": {
        title: "Đề thi thử Demo - Số 02",
        subtitle: "Môn: Tiếng Anh",
        subject: "Tiếng Anh",
        timeMinutes: 45,
        questions: [
            // Nội dung json của sếp vứt vào đây
        ]
    }
};