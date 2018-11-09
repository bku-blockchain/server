const fs = require('fs');
const path = require('path');

const polls = require('../db/polls.json');

polls.push({
  eventID: 'VTV_AWARDS_2018',
  ownerID: 'VTV_ADMIN',
  title: 'Bình chọn VTV Awards 2018. Hạng mục Dẫn chương trình ấn tượng',
  description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

  50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

  Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
  startDate: Math.round(new Date().getTime()) - 10 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 60 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
  candidates: [
    { name: 'Hữu Bằng - SBD 117', description: '', photoUrl: '' },
    { name: 'Minh Hà - SBD 159', description: '', photoUrl: '' },
    { name: 'Ngô Kiến Huy - SBD 223', description: '', photoUrl: '' },
    { name: 'Hạnh Phúc - SBD 06', description: '', photoUrl: '' },
    { name: 'Minh Trang - SBD 185', description: '', photoUrl: '' }
  ]
});

polls.push({
  eventID: 'VTV_AWARDS_2018',
  ownerID: 'VTV_ADMIN',
  title: 'Bình chọn VTV Awards 2018. Hạng mục Chương trình Văn hóa - Khoa học xã hội - Giáo dục ấn tượng',
  description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

  50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

  Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
  startDate: Math.round(new Date().getTime()) - 5 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 70 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
  candidates: [
    { name: 'Điều ước thứ 7 - Bản hoà tấu cha và con - SBD 104', description: '', photoUrl: '' },
    { name: 'Lời tri ân của những người thầy - SBD 34', description: '', photoUrl: '' },
    { name: 'Mười ngày rung chuyển thế giới - SBD 67', description: '', photoUrl: '' },
    { name: 'Thầy cô chúng ta đã thay đổi - SBD 35', description: '', photoUrl: '' },
    { name: 'Việc tử tế : Không để ai bị bỏ lại phía sau - SBD 91', description: '', photoUrl: '' }
  ]
});

polls.push({
  eventID: 'VTV_AWARDS_2018',
  ownerID: 'VTV_ADMIN',
  title: 'Bình chọn VTV Awards 2018. Hạng mục Hình ảnh thời sự ấn tượng',
  description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

  50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

  Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
  startDate: Math.round(new Date().getTime()) - 1 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 50 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
  candidates: [
    { name: 'Chiến sĩ phòng cháy chữa cháy tay bị bỏng trong vụ cháy chung cư Carina - SBD 136', description: '', photoUrl: '' },
    { name: 'Công chức đi lễ chùa trong giờ hành chính - SBD 62', description: '', photoUrl: '' },
    { name: 'Người dân cả nước ăn mừng chiến thắng của đội tuyển U23 Việt Nam và hình ảnh đội tuyển VN tại SVĐ Thường Châu trong trận đấu với Uzberkistan - SBD 24', description: '', photoUrl: '' },
    { name: 'Khai thác titan tan phá môi trường - SBD 198', description: '', photoUrl: '' },
    { name: 'Thủ đoạn rút ruột xăng dầu - SBD 31', description: '', photoUrl: '' }
  ]
});

polls.push({
  eventID: 'VTV_AWARDS_2018',
  ownerID: 'VTV_ADMIN',
  title: 'Bình chọn VTV Awards 2018. Hạng mục Diễn viên nam ấn tượng',
  description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

  50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

  Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
  startDate: Math.round(new Date().getTime()) - 8 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 10 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
  candidates: [
    { name: 'Hồng Đăng - SBD 17', description: '', photoUrl: '' },
    { name: 'Lê Vũ Long - SBD 121', description: '', photoUrl: '' },
    { name: 'Chí Thiện - SBD 162', description: '', photoUrl: '' },
    { name: 'Mạnh Trường - SBD 18', description: '', photoUrl: '' },
    { name: 'Nhan Phúc Vinh - SBD 163', description: '', photoUrl: '' }
  ]
});

polls.push({
  eventID: 'VTV_AWARDS_2018',
  ownerID: 'VTV_ADMIN',
  title: 'Bình chọn VTV Awards 2018. Hạng mục Diễn viên nữ ấn tượng',
  description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

  50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

  Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
  startDate: Math.round(new Date().getTime()) - 12 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 5 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
  candidates: [
    { name: 'Hồng Diễm - SBD 20', description: '', photoUrl: '' },
    { name: 'Thanh Hương - SBD 122', description: '', photoUrl: '' },
    { name: 'Lan Phương - SBD 75', description: '', photoUrl: '' },
    { name: 'Nhã Phương - SBD 165', description: '', photoUrl: '' },
    { name: 'Bảo Thanh - SBD 19', description: '', photoUrl: '' }
  ]
});

polls.push({
  eventID: 'VTV_AWARDS_2018',
  ownerID: 'VTV_ADMIN',
  title: 'Bình chọn VTV Awards 2018. Hạng mục Phim truyền hình ấn tượng',
  description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

  50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

  Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
  startDate: Math.round(new Date().getTime()) - 4 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 100 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
  candidates: [
    { name: 'Cả một đời ân oán - SBD 14', description: '', photoUrl: '' },
    { name: 'Cung đường tội lỗi - SBD 188', description: '', photoUrl: '' },
    { name: 'Ghét thì yêu thôi - SBD 12', description: '', photoUrl: '' },
    { name: 'Mộng phù hoa - SBD 11', description: '', photoUrl: '' },
    { name: 'Ngày ấy mình đã yêu - SBD 160', description: '', photoUrl: '' }
  ]
});

polls.push({
  eventID: 'VTV_AWARDS_2018',
  ownerID: 'VTV_ADMIN',
  title: 'Bình chọn VTV Awards 2018. Hạng mục Ca sĩ ấn tượng',
  description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

  50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

  Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
  startDate: Math.round(new Date().getTime()) + 30 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 50 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
  candidates: [
    { name: 'Tùng Dương - SBD 10', description: '', photoUrl: '' },
    { name: 'Trọng Hiếu - SBD 08', description: '', photoUrl: '' },
    { name: 'Nhóm Ngọt - SBD 228', description: '', photoUrl: '' },
    { name: 'Đức Phúc - SBD 119', description: '', photoUrl: '' },
    { name: 'Mỹ Tâm - SBD 07', description: '', photoUrl: '' }
  ]
});

polls.push({
  eventID: 'VTV_AWARDS_2018',
  ownerID: 'VTV_ADMIN',
  title: 'Bình chọn VTV Awards 2018. Hạng mục Nhân vật của năm',
  description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

  50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

  Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
  startDate: Math.round(new Date().getTime()) + 1 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 90 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
  candidates: [
    { name: 'Bé Hải An (em bé hiến giác mạc) - SBD 182', description: '', photoUrl: '' },
    { name: 'Đội tuyển U23 Việt Nam - SBD 48', description: '', photoUrl: '' },
    { name: 'Quốc Cơ, Quốc Nghiệp - SBD 181', description: '', photoUrl: '' },
    { name: 'Nữ MC Khiếm thị Lê Hương Giang - SBD 180', description: '', photoUrl: '' },
    { name: 'Cầu thủ Lương Xuân Trường - SBD 65', description: '', photoUrl: '' }
  ]
});

polls.push({
  eventID: 'VTV_AWARDS_2018',
  ownerID: 'VTV_ADMIN',
  title: 'Bình chọn VTV Awards 2018. Hạng mục Chương trình của năm',
  description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

  50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

  Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
  startDate: Math.round(new Date().getTime()) + 20 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 60 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
  candidates: [
    { name: 'Du xuân: Nhân và mộc - SBD 39', description: '', photoUrl: '' },
    { name: 'Đào mai tương ngộ - SBD 96', description: '', photoUrl: '' },
    { name: 'Gặp nhau cuối năm - SBD 45', description: '', photoUrl: '' },
    { name: 'Từ những cậu bé chân trần tới người hùng sân cỏ - SBD 43', description: '', photoUrl: '' },
    { name: 'Shark Tank Việt Nam - Thương vụ bạc tỷ - SBD 46', description: '', photoUrl: '' }
  ]
});

polls.push({
  eventID: 'VTV_AWARDS_2018',
  ownerID: 'VTV_ADMIN',
  title: 'Bình chọn VTV Awards 2018. Hạng mục Phim Tài liệu ấn tượng',
  description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

  50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

  Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
  startDate: Math.round(new Date().getTime()) + 3 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 80 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
  candidates: [
    { name: 'Ánh sáng tháng Mười - SBD 94', description: '', photoUrl: '' },
    { name: 'Bản tình ca của đá - SBD 60', description: '', photoUrl: '' },
    { name: 'Hành trình bất tận - SBD 23', description: '', photoUrl: '' },
    { name: 'Miền đất hứa - SBD 127', description: '', photoUrl: '' },
    { name: 'Về quê hương mẹ - SBD 87', description: '', photoUrl: '' }
  ]
});

fs.writeFileSync(path.join(__dirname, '../db/polls.json'), JSON.stringify(polls, null, 4));
