import type { GameQuestion, FAQItem, ChecklistItem } from './types';

// ===== Sample Question Bank =====
export const sampleQuestions: GameQuestion[] = [
  {
    id: 'Q001', type: 'TF', category: '基礎職場邏輯',
    question: '面試結束前，人資問「你還有什麼問題嗎？」，最好的回答是「沒有問題」。',
    options: ['O', 'X'], answer: 'X',
    explanation: '提問是展現積極度與了解公司文化的大好機會。可以詢問團隊合作方式、未來發展方向等，展示你對公司的興趣。'
  },
  {
    id: 'Q002', type: 'TF', category: '履歷常識',
    question: '履歷越長越好，應該把所有經歷都寫上去，展現豐富的背景。',
    options: ['O', 'X'], answer: 'X',
    explanation: '履歷應精簡、聚焦。針對應徵職位客製化內容，一般建議控制在 1-2 頁。與職位無關的經驗反而會分散焦點。'
  },
  {
    id: 'Q003', type: 'MCQ', category: '溝通應對',
    question: '面試官問「你的缺點是什麼？」時，以下哪種回答策略最佳？',
    options: ['A. 說自己沒有缺點', 'B. 說一個真實但已在改善中的缺點', 'C. 把優點包裝成缺點（例如：我太認真）', 'D. 轉移話題避免回答'],
    answer: 'B',
    explanation: '誠實面對自身不足並展示改善的行動力，反而能讓面試官感受到你的自我覺察與成長心態。避免假缺點，面試官一眼就看穿。'
  },
  {
    id: 'Q004', type: 'TF', category: '基礎職場邏輯',
    question: '面試遲到 5 分鐘以內其實沒有關係，面試官不會在意。',
    options: ['O', 'X'], answer: 'X',
    explanation: '守時是基本的職場禮儀。建議提前 10-15 分鐘到達面試地點，遲到會給面試官留下不良的第一印象。'
  },
  {
    id: 'Q005', type: 'MCQ', category: '溝通應對',
    question: '使用 STAR 原則回答行為面試題時，S 代表什麼？',
    options: ['A. Solution（解決方案）', 'B. Situation（情境）', 'C. Strategy（策略）', 'D. Strength（優勢）'],
    answer: 'B',
    explanation: 'STAR 原則：Situation（情境）→ Task（任務）→ Action（行動）→ Result（結果）。先描述背景情境，再逐步展開你的行動與成果。'
  },
  {
    id: 'Q006', type: 'TF', category: '履歷常識',
    question: '在履歷中使用量化數據（如提升效率 30%）會比純文字描述更有說服力。',
    options: ['O', 'X'], answer: 'O',
    explanation: '量化成果能讓面試官快速理解你的貢獻規模。例如「管理 5 人團隊，提升專案效率 30%」比「有效管理團隊」更具說服力。'
  },
  {
    id: 'Q007', type: 'MCQ', category: '基礎職場邏輯',
    question: '面試時的穿著打扮，以下哪個原則最為恰當？',
    options: ['A. 穿最貴的衣服展現品味', 'B. 依據該公司的文化與職位，選擇合宜的穿著', 'C. 穿便服展現真實的自我', 'D. 只要乾淨就好，穿什麼不重要'],
    answer: 'B',
    explanation: '穿著應配合公司文化。科技新創可偏 Smart Casual，傳統企業則建議正式商務裝扮。事先研究公司風格是加分關鍵。'
  },
  {
    id: 'Q008', type: 'TF', category: '溝通應對',
    question: '面試時如果不知道答案，直接承認「我不確定」比硬掰一個答案更好。',
    options: ['O', 'X'], answer: 'O',
    explanation: '誠實承認不足並表達學習意願，比硬掰更能建立信任。可以補充「我對這方面還在學習，但我會...」來展現積極態度。'
  },
  {
    id: 'Q009', type: 'MCQ', category: '履歷常識',
    question: '寄出求職信（Cover Letter）時，以下哪項最重要？',
    options: ['A. 用華麗的文字包裝自己', 'B. 針對每間公司客製化內容', 'C. 越長越好，展現誠意', 'D. 直接複製履歷內容'],
    answer: 'B',
    explanation: '客製化的求職信能展現你對該職位的熱忱與研究。強調你的能力如何匹配該公司的需求，而非泛用同一封信投遞所有公司。'
  },
  {
    id: 'Q010', type: 'TF', category: '基礎職場邏輯',
    question: '面試結束後寄一封感謝信給面試官，是加分的好習慣。',
    options: ['O', 'X'], answer: 'O',
    explanation: '感謝信不只是禮貌，更是再次強調你對職位的興趣與適任度的機會。在面試後 24 小時內寄出效果最佳。'
  },
  {
    id: 'Q011', type: 'MCQ', category: '溝通應對',
    question: '面試官問「為什麼離開上一份工作？」時，最不建議的回答是？',
    options: ['A. 尋求更大的成長空間', 'B. 因為主管很討厭，同事也很難相處', 'C. 希望挑戰不同的產業領域', 'D. 想要更符合個人職涯規劃的機會'],
    answer: 'B',
    explanation: '負面批評前公司或同事會讓面試官對你的專業度和人際能力產生疑慮。應著重在正面的職涯動機上。'
  },
  {
    id: 'Q012', type: 'TF', category: '基礎職場邏輯',
    question: '薪資談判只能在拿到 Offer 之後才進行，面試中不應主動提及。',
    options: ['O', 'X'], answer: 'X',
    explanation: '雖然一般建議等面試官主動提起薪資話題，但如果面試官詢問期望薪資，你應該要有準備。事前研究市場行情很重要。'
  },
  {
    id: 'Q013', type: 'MCQ', category: '履歷常識',
    question: '以下哪項不建議放在履歷上？',
    options: ['A. LinkedIn 個人頁面連結', 'B. 與職位相關的證照', 'C. 身分證字號', 'D. 作品集連結'],
    answer: 'C',
    explanation: '身分證字號屬於個人敏感資訊，不應出現在履歷中。履歷應聚焦在專業能力、經歷和聯絡方式。'
  },
  {
    id: 'Q014', type: 'TF', category: '溝通應對',
    question: '團體面試中，表現最積極、搶先發言最多次的人，通常最受面試官青睞。',
    options: ['O', 'X'], answer: 'X',
    explanation: '團體面試中，面試官更看重的是協作能力與傾聽技巧。適時發言、整合他人意見、展現團隊精神更為重要。'
  },
  {
    id: 'Q015', type: 'MCQ', category: '基礎職場邏輯',
    question: '收到面試通知後，以下哪項準備最重要？',
    options: ['A. 背誦完美的自我介紹稿', 'B. 研究該公司的背景、產品與文化', 'C. 買一套新衣服', 'D. 準備一份禮物送面試官'],
    answer: 'B',
    explanation: '深入了解公司能幫助你在面試中提出有深度的問題，並將自身經驗與公司需求連結，展現你是最適合的人選。'
  },
  {
    id: 'Q016', type: 'TF', category: '履歷常識',
    question: '履歷上的照片一定要用正式的證件照，不能使用生活照。',
    options: ['O', 'X'], answer: 'X',
    explanation: '視產業而定。創意產業可用專業但有個性的照片，傳統產業建議正式照。重點是看起來專業、乾淨、有精神。某些國家的履歷甚至不需要放照片。'
  },
  {
    id: 'Q017', type: 'MCQ', category: '溝通應對',
    question: '視訊面試時，以下哪項最容易被忽略但非常重要？',
    options: ['A. 使用最新款手機', 'B. 確保背景整潔、光線充足且網路穩定', 'C. 戴上耳機聽音樂放鬆', 'D. 同時開多個視窗查資料'],
    answer: 'B',
    explanation: '視訊面試的環境直接影響專業形象。確保光線從正面照射、背景乾淨、網路穩定、麥克風收音清晰，都是基本要求。'
  },
  {
    id: 'Q018', type: 'TF', category: '基礎職場邏輯',
    question: '面試時與面試官有不同意見，應該完全順從面試官的觀點，不要表達自己的看法。',
    options: ['O', 'X'], answer: 'X',
    explanation: '適當表達不同觀點反而能展現獨立思考能力。重點在於表達方式要尊重、有邏輯，例如「我理解您的觀點，同時我也想到...」。'
  },
  {
    id: 'Q019', type: 'MCQ', category: '履歷常識',
    question: '履歷中的「工作經歷」應該怎麼排序？',
    options: ['A. 按照時間順序，從最早的開始', 'B. 按照時間倒序，從最近的開始', 'C. 按照重要性排序', 'D. 隨機排列皆可'],
    answer: 'B',
    explanation: '倒序排列（最近的在前）是最常見也最受歡迎的格式，因為面試官最關心你最近的經驗和當前的能力水平。'
  },
  {
    id: 'Q020', type: 'TF', category: '溝通應對',
    question: '面試時可以適當使用肢體語言，如保持眼神接觸和微笑，來增強溝通效果。',
    options: ['O', 'X'], answer: 'O',
    explanation: '非語言溝通佔溝通效果的很大比例。適當的眼神接觸、微笑、點頭，都能傳達自信與友善，建立良好的面試互動氛圍。'
  },
  {
    id: 'Q021', type: 'MCQ', category: '基礎職場邏輯',
    question: '面試中被問到「你期望的薪資是多少？」時，最佳策略是？',
    options: ['A. 說越高越好，反正可以談', 'B. 說「都可以，公司決定就好」', 'C. 根據市場調查給出合理範圍，並表達彈性', 'D. 拒絕回答這個問題'],
    answer: 'C',
    explanation: '事先做好市場薪資調查，給出合理的薪資範圍，並表示願意根據整體福利方案做調整，展現專業與靈活度。'
  },
  {
    id: 'Q022', type: 'TF', category: '溝通應對',
    question: '在面試中提到自己曾經失敗的經驗，一定會扣分。',
    options: ['O', 'X'], answer: 'X',
    explanation: '分享失敗經驗並展示從中學到的教訓，反而能展現韌性和成長心態。關鍵是要著重在你如何處理困境及從中成長。'
  },
  {
    id: 'Q023', type: 'MCQ', category: '基礎職場邏輯',
    question: '以下關於「自我介紹」的說法，哪個最正確？',
    options: ['A. 應該背稿照唸，確保不遺漏任何內容', 'B. 控制在 1-2 分鐘，重點突出與職位相關的經歷', 'C. 從小學開始介紹，越詳細越好', 'D. 只說名字和學校就好'],
    answer: 'B',
    explanation: '自我介紹應簡潔有力，聚焦在與應徵職位最相關的學經歷與技能，讓面試官快速了解你的核心價值。'
  },
  {
    id: 'Q024', type: 'TF', category: '履歷常識',
    question: '履歷上的自傳（個人簡介）可以直接使用 AI 生成的內容，不需要修改。',
    options: ['O', 'X'], answer: 'X',
    explanation: 'AI 可以作為撰寫輔助，但內容必須經過個人化調整，確保真實反映你的經歷與個性。面試時可能會被追問細節。'
  },
  {
    id: 'Q025', type: 'MCQ', category: '溝通應對',
    question: '面試官問「你為什麼想來我們公司？」最好的回答應該包含？',
    options: ['A. 因為離家近、薪水高', 'B. 對公司的具體了解，加上自身能力如何貢獻', 'C. 因為朋友推薦的', 'D. 隨便投的，沒有特別原因'],
    answer: 'B',
    explanation: '展現你對公司做過功課，並將自身技能與公司需求連結。例如「我對貴公司在 XX 領域的發展很有興趣，我的 YY 經驗能夠...」'
  },
  {
    id: 'Q026', type: 'TF', category: '基礎職場邏輯',
    question: '面試前如果不清楚公司地址，可以在面試當天打電話詢問人資。',
    options: ['O', 'X'], answer: 'X',
    explanation: '應該提前確認好，當天打電話會顯得準備不足且可能打擾人資作業。'
  },
  {
    id: 'Q027', type: 'MCQ', category: '溝通應對',
    question: '如果面試官問的問題你聽不懂，你應該：',
    options: ['A. 隨便猜一個意思回答', 'B. 沉默思考直到想出來', 'C. 禮貌地請面試官換個方式說明或釐清問題', 'D. 直接說不知道'],
    answer: 'C',
    explanation: '主動釐清問題是良好的溝通技巧，確保回答在正確的方向上。'
  },
  {
    id: 'Q028', type: 'TF', category: '履歷常識',
    question: '在履歷表上，技能的熟練度應該盡量寫「精通」，即使只是稍微接觸過，這樣比較容易獲得面試機會。',
    options: ['O', 'X'], answer: 'X',
    explanation: '誠實為上，過度誇大會在面試或試用期被看穿，反而損害信用。'
  },
  {
    id: 'Q029', type: 'MCQ', category: '情境判斷',
    question: '被問到「如果你的意見和主管不同，你會怎麼做？」最佳回答方向是：',
    options: ['A. 堅決捍衛自己的意見', 'B. 表面同意，私下照自己的方式做', 'C. 完全聽主管的', 'D. 提出客觀理由討論，若主管維持原意則尊重決策'],
    answer: 'D',
    explanation: '展現良好的溝通能力、獨立思考，同時具備對體制與最終決策的尊重。'
  },
  {
    id: 'Q030', type: 'TF', category: '基礎職場邏輯',
    question: '面試時，為了展現自信，應該盡量坐滿整張椅子並往後靠。',
    options: ['O', 'X'], answer: 'X',
    explanation: '坐滿約三分之二，背脊挺直微向前傾，能展現積極與專注的態度。'
  },
  {
    id: 'Q031', type: 'MCQ', category: '基礎職場邏輯',
    question: '收到面試邀請信後，多久內回覆最合適？',
    options: ['A. 一週內', 'B. 24 小時內', 'C. 面試前一天', 'D. 不用回覆，直接去'],
    answer: 'B',
    explanation: '24 小時內回覆展現積極度與基本禮儀，讓公司方便安排行程。'
  },
  {
    id: 'Q032', type: 'TF', category: '溝通應對',
    question: '如果被問到不會的專業問題，可以回答「雖然我現在不會，但我學習能力很強，進公司後會學」。',
    options: ['O', 'X'], answer: 'X',
    explanation: '只有這句話太薄弱，應補充「我會如何去學」或「我過去快速學習的經驗」，並與具體行動連結。'
  },
  {
    id: 'Q033', type: 'MCQ', category: '溝通應對',
    question: '離職原因如果是因為前主管會情緒勒索，面試時應該怎麼說？',
    options: ['A. 直接抱怨前主管的行為', 'B. 說前公司文化不適合', 'C. 說為了尋求更好的發展和學習機會', 'D. 說自己被資遣了'],
    answer: 'C',
    explanation: '將焦點放在未來的發展，避免傳遞負能量或批評前東家。'
  },
  {
    id: 'Q034', type: 'TF', category: '基礎職場邏輯',
    question: '面試時攜帶紙筆做筆記，會讓面試官覺得你記憶力不好。',
    options: ['O', 'X'], answer: 'X',
    explanation: '做筆記展現認真與重視，但記筆記前最好先徵求同意。'
  },
  {
    id: 'Q035', type: 'MCQ', category: '溝通應對',
    question: '面試官問「你有沒有投遞其他公司？」時，目的是什麼？',
    options: ['A. 刺探你的忠誠度', 'B. 評估你在求職市場的搶手程度與錄取機率', 'C. 想要挖角其他公司的人', 'D. 只是隨口問問'],
    answer: 'B',
    explanation: '誠實回答有，並說明尋找的職缺方向是一致的，能增加自身價值與談判籌碼。'
  },
  {
    id: 'Q036', type: 'TF', category: '溝通應對',
    question: '團體面試時，如果不贊同別人的觀點，應該立刻打斷並指正他。',
    options: ['O', 'X'], answer: 'X',
    explanation: '應等對方說完，再以「我理解您的看法，不過我的觀點是...」來表達，展現團隊合作精神。'
  },
  {
    id: 'Q037', type: 'MCQ', category: '基礎職場邏輯',
    question: '關於面試服裝，若公司沒有特別規定，以下哪種最安全？',
    options: ['A. 全套西裝/套裝', 'B. T恤加牛仔褲', 'C. Smart Casual (商務休閒)', 'D. 運動服'],
    answer: 'C',
    explanation: '對大多數非金融/傳統產業，Smart Casual 既不失專業也不會過度拘謹。'
  },
  {
    id: 'Q038', type: 'TF', category: '基礎職場邏輯',
    question: '在線上面試（視訊）時，眼神應該直視螢幕上的面試官臉孔。',
    options: ['O', 'X'], answer: 'X',
    explanation: '應該看著攝影鏡頭，這樣對方才會覺得你有在看著他。'
  },
  {
    id: 'Q039', type: 'MCQ', category: '溝通應對',
    question: '當面試官介紹公司福利和制度時，你應該？',
    options: ['A. 趁機休息一下', 'B. 保持專注並適時點頭給予回應', 'C. 打斷並詢問更詳細的薪水數字', 'D. 表現得不感興趣'],
    answer: 'B',
    explanation: '保持專注並給予回應，展現你對公司的重視與傾聽能力。'
  },
  {
    id: 'Q040', type: 'TF', category: '履歷常識',
    question: '求職信 (Cover Letter) 的內容可以直接重複履歷表上的資訊。',
    options: ['O', 'X'], answer: 'X',
    explanation: 'Cover Letter 應該是履歷的補充，用來說明「為什麼你是這個職位的最佳人選」，而非純粹條列經歷。'
  },
  {
    id: 'Q041', type: 'MCQ', category: '溝通應對',
    question: '面試結束前，哪種「反問問題」最不適合？',
    options: ['A. 這個職位未來半年的主要目標是什麼？', 'B. 團隊目前的運作模式為何？', 'C. 請問公司會不會常常加班？', 'D. 這個職位最大的挑戰是什麼？'],
    answer: 'C',
    explanation: '直接問加班可能顯得抗壓性低，可改問「團隊的日常工作節奏與上下班時間為何」。'
  },
  {
    id: 'Q042', type: 'TF', category: '心態建設',
    question: '如果面試官在面試過程中表現出質疑的態度，代表你已經被淘汰了。',
    options: ['O', 'X'], answer: 'X',
    explanation: '這可能是壓力測試，觀察你在面對挫折和質疑時的情緒控管與應變能力。'
  },
  {
    id: 'Q043', type: 'MCQ', category: '履歷常識',
    question: '履歷表上的「興趣」欄位應該怎麼填？',
    options: ['A. 隨便寫看電影、聽音樂', 'B. 寫越冷門越好', 'C. 填寫能展現正面特質或與職務相關的興趣', 'D. 不用填，浪費版面'],
    answer: 'C',
    explanation: '例如應徵行銷可以寫經營個人部落格，能成為面試時的破冰話題與加分項目。'
  },
  {
    id: 'Q044', type: 'TF', category: '溝通應對',
    question: '面試中如果不小心說錯話，應該假裝沒事繼續說下去。',
    options: ['O', 'X'], answer: 'X',
    explanation: '可以自然地更正：「不好意思，我剛剛的表達不夠準確，我的意思是...」，展現危機處理能力。'
  },
  {
    id: 'Q045', type: 'MCQ', category: '基礎職場邏輯',
    question: '當被問到「你對我們公司了解多少？」時，最好的回答是：',
    options: ['A. 我知道你們很有名', 'B. 具體說出公司的產品、服務或近期新聞', 'C. 我其實不太了解，想聽您介紹', 'D. 我知道你們的股票代號是...'],
    answer: 'B',
    explanation: '具體說明證明你有做功課，能展現出對這份工作的熱忱。'
  },
  {
    id: 'Q046', type: 'TF', category: '溝通應對',
    question: '為了拿到 Offer，面試時對所有問題都應該回答「沒問題」，即使自己做不到。',
    options: ['O', 'X'], answer: 'X',
    explanation: '過度承諾會導致入職後無法達標，誠實評估自身能力並表達願意學習的態度才是長遠之計。'
  },
  {
    id: 'Q047', type: 'MCQ', category: '情境判斷',
    question: '面試時談到期望薪資，如果對方開出的薪水低於你的底線，你應該？',
    options: ['A. 當場翻臉走人', 'B. 委屈接受', 'C. 詢問是否有其他福利或獎金結構，並保留談判空間', 'D. 說「再聯絡」'],
    answer: 'C',
    explanation: '保持專業，了解整體薪酬結構後再做決定，並尋找可以為自己爭取空間的機會。'
  },
  {
    id: 'Q048', type: 'TF', category: '溝通應對',
    question: '在介紹自己的專案作品時，只講自己成功的地方，完全不要提到遇到的困難。',
    options: ['O', 'X'], answer: 'X',
    explanation: '描述如何克服困難的過程，往往比單純展示成功結果更能體現你的解決問題能力。'
  },
  {
    id: 'Q049', type: 'MCQ', category: '基礎職場邏輯',
    question: '準備面試的「自我介紹」時，時間長度大約控制在多久最合適？',
    options: ['A. 30 秒以內', 'B. 1 到 2 分鐘', 'C. 5 分鐘', 'D. 10 分鐘以上'],
    answer: 'B',
    explanation: '1-2 分鐘能精華呈現背景與亮點，太短顯得準備不足，太長會讓面試官失去耐心。'
  },
  {
    id: 'Q050', type: 'TF', category: '基礎職場邏輯',
    question: '面試後寄送感謝信，內容只要寫「謝謝您的時間」就可以了。',
    options: ['O', 'X'], answer: 'X',
    explanation: '感謝信應該包含對面試官時間的感謝、重申自己對職位的熱情，以及簡短提及面試中討論到的一個亮點。'
  }
];

// ===== Sample FAQ Data =====
export const sampleFAQ: FAQItem[] = [
  { category: '自我介紹', question: '請用 1-2 分鐘介紹你自己', tips: '聚焦在與目標職位相關的學經歷和技能。架構建議：現在（目前狀態）→ 過去（相關經驗）→ 未來（為何想加入）。避免流水帳式的自傳。' },
  { category: '自我介紹', question: '你的優點和缺點是什麼？', tips: '優點：選擇與職位需求匹配的特質，用具體事例佐證。缺點：選擇真實但可改善的點，並說明你正在採取的改善行動。' },
  { category: '自我介紹', question: '你為什麼選擇這個科系/領域？', tips: '分享你對這個領域的熱情與初衷，連結到具體的學習成果或專案經驗，展現你的選擇是經過思考的。' },
  { category: '行為面試', question: '請描述一次你遇到挫折並解決的經驗', tips: '使用 STAR 原則：情境（Situation）→ 任務（Task）→ 行動（Action）→ 結果（Result）。著重在你的思考過程和解決問題的邏輯。' },
  { category: '行為面試', question: '描述一次你在團隊中與他人意見不合的經驗', tips: '展現你的溝通和協調能力。強調你如何傾聽不同觀點、尋找共識，以及最終如何達成團隊目標。避免將自己塑造成「永遠正確」的人。' },
  { category: '行為面試', question: '你如何處理同時有多個截止日期的壓力？', tips: '分享你的時間管理方法（優先排序、分解任務、善用工具）。用具體案例說明你如何在壓力下保持效率與品質。' },
  { category: '行為面試', question: '請分享一個你主動學習新技能的經歷', tips: '展現自我驅動的學習能力。描述學習的動機、過程中遇到的困難、以及最終如何應用所學。這對應屆畢業生特別重要。' },
  { category: '情境題', question: '如果主管給你一個你從未接觸過的任務，你會怎麼做？', tips: '展現學習意願和主動性。建議回答架構：先做初步研究 → 擬定計畫 → 主動請教有經驗的同事 → 定期回報進度給主管。' },
  { category: '情境題', question: '如果你發現同事的工作出了錯，你會怎麼處理？', tips: '展現你的協作精神和溝通能力。私下善意提醒，而非公開指出。重點在於解決問題而非追究責任。' },
  { category: '情境題', question: '如果你和團隊成員在專案方向上有根本性的分歧？', tips: '先理解對方立場，用數據和事實支持自己的觀點。若無法達成共識，建議各自做小規模驗證（Prototype），或請更有經驗的人協助判斷。' },
  { category: '情境題', question: '面試官問「你有什麼問題想問我們的嗎？」你會問什麼？', tips: '準備 2-3 個有深度的問題。例如：團隊的工作模式、新人的培訓計畫、這個職位未來半年的目標。避免問可以在官網找到答案的問題。' },
  { category: '行為面試', question: '過去半年內最有成就的一件事？', tips: '使用 STAR 原則描述。選擇能展現與應徵職位相關能力的成就。' },
  { category: '求職動機', question: '對所應徵的職務有什麼吸引你的地方？', tips: '結合自身專長與公司發展，具體點出該職務能讓你發揮或學習的地方，避免只談薪水或福利。' },
  { category: '自我認知', question: '你希望自己擁有哪三項技能或特質？', tips: '可以提出與職位相關，且你目前正在努力培養的技能，展現上進心與自我成長的企圖心。' },
  { category: '文化契合度', question: '你喜歡什麼樣的工作方式？', tips: '誠實作答，但建議往團隊合作、目標導向等正面特質靠攏，並確保與應徵公司的企業文化不衝突。' },
  { category: '情境題', question: '如果工作過多，且其中有主管交辦事項，無法在下班前準時完成，你會怎麼做？', tips: '展現時間管理與溝通能力。先排定優先順序，主動向主管回報進度與預計完成時間，必要時尋求協助或協調資源。' },
  { category: '情境題', question: '和不同個性(工作風格)的人合作，你會怎麼樣讓工作順利進行？', tips: '強調尊重差異、主動溝通、建立共識。可以舉過去的例子，說明你如何調整溝通方式以達成團隊目標。' },
  { category: '行為面試', question: '遇到最有挑戰性(最棘手)的工作情況是什麼，以及你如何克服？', tips: '著重在「克服」的過程。遇到困難時你的思考邏輯是什麼？你採取了哪些行動？最後學到了什麼？' },
  { category: '職涯規劃', question: '你對所應徵的職務有什麼樣的展望？', tips: '展現你對該職務的了解與企圖心。可以談談你希望在短期內達成什麼目標，以及長期希望能為公司帶來什麼價值。' },
  { category: '職涯規劃', question: '你對自己未來3~5年後的想像/期許是什麼？', tips: '讓面試官看到你的穩定性與成長潛力。目標應具體、合理，且與應徵公司的發展路徑有一定的關聯性。' },
  { category: '求職動機', question: '在過去的工作經歷中，您最感興趣的工作是哪一項？原因是？', tips: '選擇能與目前應徵職位產生連結的工作經驗，說明該工作如何激發你的熱情，以及你從中獲得的成就感。' },
  { category: '求職動機', question: '最不喜歡的工作是？原因是？', tips: '誠實但委婉。可以說「較缺乏挑戰性」或「較少團隊互動」等，並將話題導向你「希望」在下一份工作獲得的東西（剛好是該職位能提供的）。' },
  { category: '自我認知', question: '在工作方面，你認為哪些技巧可以再加強，使得工作更加得心應手？', tips: '類似缺點題，提出一個真實且正在改善的技巧，例如「某項新軟體的操作」或「跨部門溝通的效率」，並說明你的改善計畫。' },
  { category: '情境題', question: '如果你接掌這項職務，你會如何自我工作要求？', tips: '展現當責態度。設定明確的目標（例如：前三個月熟悉流程、半年內獨立作業），並強調你會主動回報進度與尋求回饋。' },
  { category: '情境題', question: '如果你無法在試用期內勝任本職務時，您的做法為何？', tips: '展現解決問題的決心與對自身能力的客觀評估。會主動與主管討論落差所在、擬定改善計畫並積極執行，若最後仍不適合，也會負責任地完成交接。' },
];

// ===== Sample Checklist Data =====
export const sampleChecklist: ChecklistItem[] = [
  { phase: '面試前', task: '提前 10–15 分鐘到（不是剛好）', checked: false },
  { phase: '面試前', task: '查過公司作品 / 產品 / 近期動態', checked: false },
  { phase: '面試前', task: '準備好 1 分鐘自我介紹', checked: false },
  { phase: '面試前', task: '作品集順過一次（不是第一次看）', checked: false },
  { phase: '面試前', task: '想好 2–3 個「反問問題」', checked: false },
  { phase: '面試前', task: '衣服乾淨、不皺', checked: false },
  { phase: '面試前', task: '鞋子乾淨（很多人忽略）', checked: false },
  { phase: '面試前', task: '頭髮整齊（不是剛睡醒）', checked: false },
  { phase: '面試前', task: '包包整齊（拿東西不狼狽）', checked: false },
  { phase: '面試前', task: '手機靜音', checked: false },
  { phase: '面試前', task: '把面試當「交流」，不是考試', checked: false },
  { phase: '面試前', task: '準備好被質疑（而不是被稱讚）', checked: false },
  { phase: '面試前', task: '記得：你也在選公司', checked: false },
  { phase: '等待時', task: '坐姿端正（不要癱）', checked: false },
  { phase: '等待時', task: '不滑娛樂型內容（IG / 抖音 ）', checked: false },
  { phase: '等待時', task: '可以看資料 / 筆記', checked: false },
  { phase: '等待時', task: '不發呆、不東張西望', checked: false },
  { phase: '等待時', task: '對櫃檯 / 工作人員有禮貌', checked: false },
  { phase: '進入面試', task: '敲門或確認後再進入', checked: false },
  { phase: '進入面試', task: '進門有眼神 + 簡單問候', checked: false },
  { phase: '進入面試', task: '視情況輕關門或詢問', checked: false },
  { phase: '進入面試', task: '坐下前等指示或示意', checked: false },
  { phase: '進入面試', task: '坐姿穩（不縮、不躺）', checked: false },
  { phase: '面試過程', task: '回答有結構（不要亂講）', checked: false },
  { phase: '面試過程', task: '講完一句會停 1 秒', checked: false },
  { phase: '面試過程', task: '少用「嗯、然後、就是」', checked: false },
  { phase: '面試過程', task: '不搶話、不打斷', checked: false },
  { phase: '面試過程', task: '聽不懂會確認（不是亂答）', checked: false },
  { phase: '面試過程', task: '有針對問題回答（不偏題）', checked: false },
  { phase: '面試過程', task: '被挑戰時不防衛', checked: false },
  { phase: '面試過程', task: '願意承認不知道', checked: false },
  { phase: '面試過程', task: '展現「可以學」而不是「我都會」', checked: false },
  { phase: '面試過程', task: '講「決策」而不是只講「結果」', checked: false },
  { phase: '面試過程', task: '有提到限制與取捨（Trade-off）', checked: false },
  { phase: '面試過程', task: '嘗試用數據或具體描述', checked: false },
  { phase: '互動與氣場', task: '有自然眼神交流', checked: false },
  { phase: '互動與氣場', task: '不過度討好（一直點頭）', checked: false },
  { phase: '互動與氣場', task: '有自己的觀點（不是全部迎合）', checked: false },
  { phase: '互動與氣場', task: '氣氛像「合作討論」而不是「被審問」', checked: false },
  { phase: '結尾與離開', task: '有提出 1–2 個好問題', checked: false },
  { phase: '結尾與離開', task: '結尾有完整一句話收（不是直接結束）', checked: false },
  { phase: '結尾與離開', task: '有說出建議句：「謝謝今天的時間，很高興有機會交流」', checked: false },
  { phase: '結尾與離開', task: '收東西不慌亂', checked: false },
  { phase: '結尾與離開', task: '起身有禮貌點頭或致意', checked: false },
  { phase: '結尾與離開', task: '輕聲離開（門不要甩）', checked: false },
  { phase: '面試後', task: '當天或隔天寄感謝信（加分）', checked: false },
  { phase: '面試後', task: '簡單回顧：哪裡答不好', checked: false },
  { phase: '面試後', task: '記錄被問到的問題（下次會更強）', checked: false },
];
