export interface PedagogicalProject {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: 'Kế Hoạch Bài Dạy' | 'Thí Nghiệm & Lab' | 'Ứng Dụng MOS' | 'Hoạt Động STEM' | 'Tiếng Anh Sư Phạm';
  year: string;
  gradeLevel: string; // e.g. 'Lớp 7 - 8 THCS'
  subject: string; // 'Hóa học & Khoa học Tự nhiên'
  mentor: string;
  tools: string[];
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'tall';
  description: string;
  pedagogicalObjectives: string[];
  lessonPlanDetails: {
    targetCompetencies: string;
    teachingMethod: string;
    practicalActivity: string;
  };
  gallery: string[];
}

export interface SkillItem {
  name: string;
  category: string;
  description: string;
  proficiency: string;
  application: string;
}

export const STUDENT_PROFILE = {
  fullName: 'Nguyễn Ngọc Quỳnh Trâm',
  displayName: 'Quỳnh Trâm',
  title: 'Sinh viên Sư phạm Hóa học · Năm 3',
  university: 'Trường Đại học Sư phạm TP. Hồ Chí Minh (HCMUE)',
  faculty: 'Khoa Hóa học',
  yearOfStudy: 'Sinh viên Năm 3 (Khóa 2023 — 2027)',
  careerGoal: 'Giáo viên Khoa học Tự nhiên & Hóa học cấp 2 (THCS)',
  email: 'quynhtram.hcmue@example.edu.vn',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  coreSkills: ['Tiếng Anh', 'MOS (Microsoft Office Specialist)', 'Sư phạm Hóa học', 'Thực nghiệm Lab', 'Thiết kế STEM'],
  philosophy: 'Hóa học không chỉ là những phương trình trên bảng đen; đó là lăng kính kỳ diệu giúp học sinh THCS thấu hiểu và trân trọng thế giới tự nhiên xung quanh mình.',
};

export const PEDAGOGICAL_PROJECTS: PedagogicalProject[] = [
  {
    id: 'ke-hoach-bai-day-khtn7',
    index: '01',
    title: 'Kế Hoạch Bài Dạy: Bảng Tuần Hoàn & Nguyên Tố Hóa Học',
    subtitle: 'Thiết kế bài dạy tích cực môn Khoa học Tự nhiên 7 (Bộ GD&ĐT)',
    category: 'Kế Hoạch Bài Dạy',
    year: '2025',
    gradeLevel: 'Khối 7 THCS',
    subject: 'Khoa học Tự nhiên 7 (Phân môn Hóa học)',
    mentor: 'Giảng viên Bộ môn Phương pháp Dạy học Hóa học',
    tools: ['Microsoft Word (MOS)', 'PowerPoint Interactive', 'Canva Giáo dục'],
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200',
    aspect: 'portrait',
    description: 'Thiết kế bài dạy theo định hướng phát triển phẩm chất và năng lực học sinh (Công văn 5512/BGDĐT). Sử dụng trò chơi tìm hiểu thẻ bài nguyên tố kết hợp bảng tuần hoàn tương tác để học sinh tự khám phá quy luật biến đổi tuần hoàn.',
    pedagogicalObjectives: [
      'Năng lực nhận thức khoa học tự nhiên: Nêu được cấu trúc bảng tuần hoàn (ô, chu kì, nhóm).',
      'Năng lực tìm hiểu tự nhiên: Phân loại được kim loại, phi kim và khí hiếm qua màu sắc và mô hình.',
      'Phát triển kỹ năng làm việc nhóm và thuyết trình bảng tổng hợp dữ liệu.'
    ],
    lessonPlanDetails: {
      targetCompetencies: 'Nhận thức khoa học tự nhiên & Tự chủ, tự học',
      teachingMethod: 'Dạy học theo trạm (Station Learning) kết hợp Trò chơi hóa (Gamification)',
      practicalActivity: 'Thử thách "Mật mã nguyên tố": Ghép thẻ nguyên tử khối và electron lớp ngoài cùng.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'nhat-ky-thi-nghiem-lab',
    index: '02',
    title: 'Sổ Tay Thao Tác Thí Nghiệm & An Toàn Phòng Lab',
    subtitle: 'Quy trình thực hành an toàn và hướng dẫn thí nghiệm vui cho học sinh cấp 2',
    category: 'Thí Nghiệm & Lab',
    year: '2025',
    gradeLevel: 'Khối 8 - 9 THCS',
    subject: 'Thực hành Hóa học Cơ bản',
    mentor: 'Phòng Thí nghiệm Hóa vô cơ & Đại cương HCMUE',
    tools: ['Bộ dụng cụ thí nghiệm thủy tinh', 'Hóa chất chuẩn', 'Sổ tay điện tử'],
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1200',
    aspect: 'tall',
    description: 'Hồ sơ tổng hợp các chuỗi thí nghiệm biểu diễn và thực hành học sinh dành riêng cho lứa tuổi THCS: phản ứng tỏa nhiệt, phản ứng tạo kết tủa màu sắc, đo độ pH tự nhiên. Nhấn mạnh tuyệt đối nguyên tắc an toàn hóa chất.',
    pedagogicalObjectives: [
      'Thành thạo kỹ năng rót hóa chất, sử dụng ống hút nhỏ giọt và đun ống nghiệm an toàn.',
      'Rèn luyện kỹ năng quan sát hiện tượng, giải thích bản chất bằng phương trình hóa học.',
      'Xây dựng tâm thế cẩn trọng, tỉ mỉ và tôn trọng sự thật khách quan trong khoa học.'
    ],
    lessonPlanDetails: {
      targetCompetencies: 'Năng lực thực hành thí nghiệm & Vận dụng kiến thức vào thực tiễn',
      teachingMethod: 'Phương pháp trực quan - Thực nghiệm chứng minh',
      practicalActivity: 'Thực hành phân biệt axit, bazơ bằng quỳ tím và dung dịch phenolphthalein.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'ung-dung-mos-giang-day',
    index: '03',
    title: 'Ứng Dụng Chuẩn MOS Trong Quản Lý Lớp & Bài Giảng Trực Quan',
    subtitle: 'Tối ưu hóa học liệu với Microsoft Office Specialist (Word, Excel, PowerPoint)',
    category: 'Ứng Dụng MOS',
    year: '2025',
    gradeLevel: 'Toàn khối THCS',
    subject: 'Công nghệ Thông tin & Sư phạm Số',
    mentor: 'Bộ môn Ứng dụng CNTT trong Dạy học',
    tools: ['MOS Word Expert', 'MOS Excel Expert', 'MOS PowerPoint Specialist'],
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200',
    aspect: 'landscape',
    description: 'Ứng dụng kỹ năng tin học văn phòng quốc tế MOS để chuẩn hóa hồ sơ dạy học: Soạn thảo phiếu học tập khoa học trên Word (áp dụng Styles và Typography), lập bảng Excel tự động tính điểm kiểm tra và phân loại năng lực học sinh, thiết kế slide PowerPoint hiệu ứng chuyển động mô phỏng phản ứng phân tử.',
    pedagogicalObjectives: [
      'Xây dựng ngân hàng đề kiểm tra trắc nghiệm & tự luận được định dạng chuyên nghiệp theo chuẩn MOS.',
      'Sử dụng hàm Excel (VLOOKUP, IF, AVERAGE) để theo dõi tiến độ học tập của từng học sinh.',
      'Tạo bài giảng điện tử tương tác đa giác quan kích thích sự chú ý của học sinh THCS.'
    ],
    lessonPlanDetails: {
      targetCompetencies: 'Năng lực công nghệ thông tin & Quản trị dữ liệu giáo dục',
      teachingMethod: 'Blended Learning & Số hóa hồ sơ sư phạm',
      practicalActivity: 'Bảng theo dõi thi đua học tập tự động hóa bằng bảng tính Excel kết hợp biểu đồ trực quan.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'du-an-stem-khtn',
    index: '04',
    title: 'Dự Án STEM THCS: Chỉ Thị Màu Tự Nhiên Từ Bắp Cải Tím',
    subtitle: 'Dạy học tích hợp Khoa học - Công nghệ - Kỹ thuật - Toán học',
    category: 'Hoạt Động STEM',
    year: '2024',
    gradeLevel: 'Khối 8 THCS',
    subject: 'Chủ đề Dung dịch & Thang đo pH',
    mentor: 'CLB Giáo dục STEM - HCMUE',
    tools: ['Bắp cải tím', 'Dung dịch gia dụng', 'Thang đo pH chuẩn'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    aspect: 'portrait',
    description: 'Dự án STEM hướng dẫn học sinh THCS tự chiết xuất sắc tố anthocyanin từ bắp cải tím để tạo thành dung dịch chỉ thị màu pH tự nhiên, sau đó thử nghiệm với các dung dịch quen thuộc trong gia đình (nước chanh, giấm ăn, nước xà phòng, baking soda).',
    pedagogicalObjectives: [
      'Học sinh hiểu được khái niệm môi trường axit, bazơ và trung tính qua sự biến đổi màu sắc thực tế.',
      'Kết nối kiến thức Hóa học với đời sống sinh hoạt, thực phẩm và sức khỏe con người.',
      'Thực hành quy trình nghiên cứu khoa học: Đặt giả thuyết, thí nghiệm, ghi chép và kết luận.'
    ],
    lessonPlanDetails: {
      targetCompetencies: 'Giao tiếp khoa học & Năng lực giải quyết vấn đề sáng tạo',
      teachingMethod: 'Dạy học dựa trên dự án (Project-Based Learning - PBL)',
      practicalActivity: 'Chế tạo thang đo màu chuẩn và vẽ tranh bằng các dung dịch axit/bazơ trên giấy ngâm anthocyanin.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'tieng-anh-chuyen-nganh-hoa',
    index: '05',
    title: 'Học Liệu Song Ngữ: Thuật Ngữ Hóa Học Tiếng Anh Cho THCS',
    subtitle: 'Bộ flashcard và tài liệu bổ trợ tiếng Anh chuyên ngành Hóa học cơ bản',
    category: 'Tiếng Anh Sư Phạm',
    year: '2025',
    gradeLevel: 'Khối 7 - 9 THCS',
    subject: 'Khoa học Tự nhiên & Tiếng Anh Tích Hợp (CLIL)',
    mentor: 'Tổ Ngoại ngữ & Hóa học Quốc tế',
    tools: ['IELTS / CEFR Academic English', 'Bộ Flashcard Song Ngữ', 'Quizlet'],
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200',
    aspect: 'landscape',
    description: 'Tài liệu biên soạn thuật ngữ Hóa học Anh - Việt dành cho học sinh chuẩn bị tham gia các chương trình song ngữ hoặc hội nhập quốc tế (Element, Compound, Chemical Reaction, Solution, Precipitate). Giúp học sinh làm quen với tên nguyên tố theo chuẩn quốc tế IUPAC.',
    pedagogicalObjectives: [
      'Học sinh đọc đúng và ghi nhớ tên các nguyên tố theo danh pháp IUPAC (Hydrogen, Oxygen, Sodium, Iron...).',
      'Nâng cao khả năng tiếp cận tài liệu thí nghiệm khoa học nước ngoài từ bậc THCS.',
      'Tạo phản xạ ngôn ngữ tự nhiên trong các tiết học Khoa học Tự nhiên tăng cường.'
    ],
    lessonPlanDetails: {
      targetCompetencies: 'Năng lực giao tiếp ngoại ngữ trong bối cảnh khoa học tự nhiên',
      teachingMethod: 'Dạy học tích hợp nội dung và ngôn ngữ (CLIL - Content and Language Integrated Learning)',
      practicalActivity: 'Thử thách phát âm chuẩn và giải ô chữ khoa học tiếng Anh theo chủ đề.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'nghiep-vu-su-pham-tap-giang',
    index: '06',
    title: 'Nhật Ký Tập Giảng & Rèn Luyện Nghiệp Vụ Sư Phạm',
    subtitle: 'Thực hành đứng lớp, quản lý thời gian và xử lý tình huống sư phạm thực tế',
    category: 'Kế Hoạch Bài Dạy',
    year: '2024',
    gradeLevel: 'Khối 8 THCS',
    subject: 'Nghiệp vụ Sư phạm 1 & 2',
    mentor: 'Giảng viên Hướng dẫn Tập giảng Khoa Hóa học',
    tools: ['Bảng phấn truyền thống', 'Micro trợ giảng', 'Bản ghi hình tiết dạy'],
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
    aspect: 'portrait',
    description: 'Tổng kết các tiết tập giảng thực nghiệm tại giảng đường Đại học Sư phạm TP.HCM. Rèn luyện tác phong sư phạm chuẩn mực, giọng nói truyền cảm, cách phân chia bảng viết khoa học và nghệ thuật đặt câu hỏi gợi mở cho học sinh lứa tuổi 12 - 15.',
    pedagogicalObjectives: [
      'Làm chủ thời lượng 45 phút của một tiết học theo cấu trúc 5 bước chính thức của Bộ GD&ĐT.',
      'Rèn luyện kỹ năng xử lý các tình huống sư phạm giả định (học sinh mất tập trung, câu hỏi hóc búa).',
      'Tự đánh giá và hoàn thiện phong thái đứng lớp tự tin, ấm áp và truyền cảm hứng.'
    ],
    lessonPlanDetails: {
      targetCompetencies: 'Năng lực tổ chức hoạt động dạy học & Giao tiếp sư phạm',
      teachingMethod: 'Microteaching (Dạy học vi mô) có phản hồi đồng đẳng',
      practicalActivity: 'Tập giảng chuyên đề "Định luật bảo toàn khối lượng" với thí nghiệm cân đong trực tiếp.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

export const SKILL_COMPETENCIES: SkillItem[] = [
  {
    name: 'Kỹ Năng Tin Học MOS (Microsoft Office Specialist)',
    category: 'Công nghệ & Quản trị Dữ liệu Sư phạm',
    description: 'Thành thạo Word, Excel và PowerPoint theo chuẩn kiểm định quốc tế của Certiport.',
    proficiency: 'Thành Thạo / Chuẩn Quốc Tế MOS',
    application: 'Soạn thảo giáo án chuẩn chỉ, quản lý điểm và sổ theo dõi học sinh bằng bảng tính, thiết kế slide bài giảng tương tác trực quan.'
  },
  {
    name: 'Kỹ Năng Tiếng Anh Sư Phạm & Giao Tiếp',
    category: 'Ngoại Ngữ & Tiếp Cận Học Liệu',
    description: 'Giao tiếp tự tin, đọc hiểu tài liệu chuyên ngành Hóa học, danh pháp hóa học quốc tế IUPAC.',
    proficiency: 'Tốt (Giao tiếp & Đọc hiểu chuyên ngành)',
    application: 'Giảng dạy các lớp Khoa học Tự nhiên tích hợp tiếng Anh, tham khảo tài liệu thí nghiệm và STEM quốc tế.'
  },
  {
    name: 'Phương Pháp Dạy Học Khoa Học Tự Nhiên & Hóa Học THCS',
    category: 'Chuyên Môn Sư Phạm',
    description: 'Nắm vững chương trình GDPT 2018, thiết kế kế hoạch bài dạy theo Công văn 5512.',
    proficiency: 'Đang rèn luyện chuyên sâu (Năm 3 HCMUE)',
    application: 'Áp dụng các phương pháp dạy học tích cực: Bàn tay nặn bột, Dạy học theo góc, Dạy học theo trạm.'
  },
  {
    name: 'Thực Hành & An Toàn Thí Nghiệm Hóa Học',
    category: 'Thực Nghiệm Khoa Học',
    description: 'Kỹ năng thao tác dụng cụ thủy tinh, pha chế hóa chất nồng độ chuẩn và xử lý sự cố hóa học.',
    proficiency: 'Chuẩn Phòng Lab Sư Phạm',
    application: 'Chuẩn bị thí nghiệm biểu diễn và hướng dẫn học sinh THCS thực hành an toàn tuyệt đối.'
  }
];

export const PEDAGOGICAL_MANIFESTO = {
  quote: "Giáo dục học sinh cấp 2 về Khoa học Tự nhiên không phải là ép các em học thuộc lòng các công thức khô khan, mà là cùng các em quan sát một ngọn lửa, một giọt đổi màu của dung dịch và tự hỏi: 'Tại sao điều này lại xảy ra?'.",
  author: 'Nguyễn Ngọc Quỳnh Trâm',
  role: 'Sinh viên Sư phạm Hóa học · ĐH Sư phạm TP.HCM'
};
