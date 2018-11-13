const fs = require('fs');
const path = require('path');

const polls = require('../db/polls.json');

polls.push({
  eventID: 'VPF_NUTICAFE_2018',
  ownerID: 'VPF_NUTICAFE_ADMIN',
  title: 'Bình chọn bàn thắng đẹp tháng 9 Giải VĐQG Nuti Café 2018',
  description: `I.    MỤC ĐÍCH & CÁCH THỨC BÌNH CHỌN:

  1.    Mục đích: Chọn được Cầu thủ đã ghi được “Bàn thắng đẹp nhất tháng” của Giải bóng đá VĐQG – Nuti Café 2018 do khán giả bình chọn; Khán giả may mắn tham gia bình chọn Bàn thắng đẹp nhất tháng.

  2.    Thời gian áp dụng: trong thời gian diễn ra Giải Bóng đá Vô địch Quốc gia – Nuti Café 2018.

  3.    Sau khi kết thúc lượt đấu cuối cùng của Giải bóng đá Vô địch Quốc gia trong tháng, BTC sẽ lựa chọn và đề cử 05 bàn thắng với các mã số tương ứng, công bố trên website của VPF cùng với thời gian bình chọn cụ thể cho tháng đó (www.vpf.vn).

  4.    Khán giả sẽ tham gia bình chọn Bàn thắng đẹp nhất tháng, thông qua hệ thống website của VPF với mã số các bàn thắng đã được công bố ở trên. Thông tin bình chọn sẽ được cập nhật trực tiếp lên website của VPF tại địa chỉ www.vpf.vn/binh-chon/.
  `,
  startDate: Math.round(new Date().getTime()) - 11 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 12 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://www.vnleague.com/images/album/2018/10/1539012614.jpg',
  candidates: [
    { name: 'MS 1: Hoàng Vũ Olayle SamSon (39) CLB Hà Nội', description: '', photoUrl: '' },
    { name: 'MS2: Phạm Văn Thuận (15) CLB Nam Định', description: '', photoUrl: '' },
    { name: 'MS3: Đinh Hoàng Max (29) CLB Becamex Bình Dương', description: '', photoUrl: '' },
    { name: 'MS4: Lynch Jermie Dwayne (91) CLB SLNA', description: '', photoUrl: '' },
    { name: 'MS5: Nguyễn Hoàng Quốc Chí (13) Sanna Khánh Hòa BVN', description: '', photoUrl: '' }
  ]
});

polls.push({
  eventID: 'VPF_NUTICAFE_2018',
  ownerID: 'VPF_NUTICAFE_ADMIN',
  title: 'Bình chọn vua phá luới tháng 10 Giải VĐQG Nuti Café 2018',
  description: `I.    MỤC ĐÍCH & CÁCH THỨC BÌNH CHỌN:

  1.    Mục đích: Chọn được Cầu thủ đã ghi được “Bàn thắng đẹp nhất tháng” của Giải bóng đá VĐQG – Nuti Café 2018 do khán giả bình chọn; Khán giả may mắn tham gia bình chọn Bàn thắng đẹp nhất tháng.

  2.    Thời gian áp dụng: trong thời gian diễn ra Giải Bóng đá Vô địch Quốc gia – Nuti Café 2018.

  3.    Sau khi kết thúc lượt đấu cuối cùng của Giải bóng đá Vô địch Quốc gia trong tháng, BTC sẽ lựa chọn và đề cử 05 bàn thắng với các mã số tương ứng, công bố trên website của VPF cùng với thời gian bình chọn cụ thể cho tháng đó (www.vpf.vn).

  4.    Khán giả sẽ tham gia bình chọn Bàn thắng đẹp nhất tháng, thông qua hệ thống website của VPF với mã số các bàn thắng đã được công bố ở trên. Thông tin bình chọn sẽ được cập nhật trực tiếp lên website của VPF tại địa chỉ www.vpf.vn/binh-chon/.
  `,
  startDate: Math.round(new Date().getTime()) - 20 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 20 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://www.vnleague.com/images/album/2018/10/1539012614.jpg',
  candidates: [
    { name: 'MS 1: Hoàng Vũ Olayle SamSon (39) CLB Hà Nội', description: '', photoUrl: '' },
    { name: 'MS2: Phạm Văn Thuận (15) CLB Nam Định', description: '', photoUrl: '' },
    { name: 'MS3: Đinh Hoàng Max (29) CLB Becamex Bình Dương', description: '', photoUrl: '' },
    { name: 'MS4: Lynch Jermie Dwayne (91) CLB SLNA', description: '', photoUrl: '' },
    { name: 'MS5: Nguyễn Hoàng Quốc Chí (13) Sanna Khánh Hòa BVN', description: '', photoUrl: '' }
  ]
});

polls.push({
  eventID: 'VPF_NUTICAFE_2018',
  ownerID: 'VPF_NUTICAFE_ADMIN',
  title: 'Bình chọn găng tay vàng tháng 11 Giải VĐQG Nuti Café 2018',
  description: `I.    MỤC ĐÍCH & CÁCH THỨC BÌNH CHỌN:

  1.    Mục đích: Chọn được Cầu thủ đã ghi được “Bàn thắng đẹp nhất tháng” của Giải bóng đá VĐQG – Nuti Café 2018 do khán giả bình chọn; Khán giả may mắn tham gia bình chọn Bàn thắng đẹp nhất tháng.

  2.    Thời gian áp dụng: trong thời gian diễn ra Giải Bóng đá Vô địch Quốc gia – Nuti Café 2018.

  3.    Sau khi kết thúc lượt đấu cuối cùng của Giải bóng đá Vô địch Quốc gia trong tháng, BTC sẽ lựa chọn và đề cử 05 bàn thắng với các mã số tương ứng, công bố trên website của VPF cùng với thời gian bình chọn cụ thể cho tháng đó (www.vpf.vn).

  4.    Khán giả sẽ tham gia bình chọn Bàn thắng đẹp nhất tháng, thông qua hệ thống website của VPF với mã số các bàn thắng đã được công bố ở trên. Thông tin bình chọn sẽ được cập nhật trực tiếp lên website của VPF tại địa chỉ www.vpf.vn/binh-chon/.
  `,
  startDate: Math.round(new Date().getTime()) - 50 * 24 * 60 * 60 * 1000,
  endDate: Math.round(new Date().getTime()) + 60 * 24 * 60 * 60 * 1000,
  photoUrl: 'http://www.vnleague.com/images/album/2018/10/1539012614.jpg',
  candidates: [
    { name: 'MS 1: Hoàng Vũ Olayle SamSon (39) CLB Hà Nội', description: '', photoUrl: '' },
    { name: 'MS2: Phạm Văn Thuận (15) CLB Nam Định', description: '', photoUrl: '' },
    { name: 'MS3: Đinh Hoàng Max (29) CLB Becamex Bình Dương', description: '', photoUrl: '' },
    { name: 'MS4: Lynch Jermie Dwayne (91) CLB SLNA', description: '', photoUrl: '' },
    { name: 'MS5: Nguyễn Hoàng Quốc Chí (13) Sanna Khánh Hòa BVN', description: '', photoUrl: '' }
  ]
});

// polls.push({
//   eventID: 'VN_RECORD_ASS_2018',
//   ownerID: 'VN_RECORD_ASS_ADMIN',
//   title: 'ĐỀ CỬ NHỮNG ĐIỂM ĐẾN NÍU CHÂN DU KHÁCH TẠI ĐẢO NGỌC PHÚ QUỐC 2018',
//   description: `Khi nói đến chứng khoán, người ta nhắc đến phố Wall; đề cập đến hệ thống thức ăn nhanh, người ta nghĩ đến Mac Donald; nói đến nước hoa, người ta liên tưởng ngay đến nước Pháp; đề cập tới đồng hồ, người ta chọn Thụy Sỹ… Vậy nói đến Việt Nam thì đâu là hệ thống những giá trị đỉnh cao mà xã hội có thể tín nhiệm, hướng về?

//   Việt Nam có thể không thể tự hào với thế giới về những phát minh vĩ đại, về những sáng tạo công nghệ đỉnh cao hay một nền kinh tế lớn mạnh,… Thế nhưng người Việt Nam lại có thế tự hào là đất nước sở hữu những một nền văn hóa lâu đời, một lịch sử đấu tranh anh dũng, một kho tàng ẩm thực phong phú đậm đà bản sắc dân tộc và vô vàng những cảnh quan thiên nhiên tươi đẹp, đặc sắc.

//   Các giá trị tuyệt vời ấy của đất nước và con người Việt đã dần được bạn bè thế giới công nhận và ngưỡng mộ. Các giá trị này chính là sức mạnh đưa Việt Nam sánh vai với các cường quốc lớn trên thế giới. Thế giới không vinh danh Việt Nam cho những phát minh vĩ đại nhưng lại buộc phải xướng danh Việt Nam vì một nền ẩm thực độc đáo, vì những nét văn hóa đặc sắc lâu đời còn được lưu giữ qua nhiều thế hệ, vì những cảnh quang thiên nhiên hùng vĩ tuyệt vời.`,
//   startDate: Math.round(new Date().getTime()) - 15 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 1 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://topplus.vn/Userfiles/Upload/images/van-mieu-quoc-tu-giam.jpg',
//   candidates: [
//     { name: 'Chợ Đêm Phú Quốc', description: '', photoUrl: '' },
//     { name: 'Nhà tù Phú Quốc (Nhà lao Cây Dừa)', description: '', photoUrl: '' },
//     { name: 'Bảo tàng Cội Nguồn', description: '', photoUrl: '' },
//     { name: 'Thiền viện Trúc Lâm Hộ Quốc', description: '', photoUrl: '' },
//     { name: 'Làng Chài Hàm Ninh', description: '', photoUrl: '' },
//     { name: 'Cơ sở nuôi cấy Ngọc Trai Phú Quốc', description: '', photoUrl: '' },
//     { name: 'Nhà thùng sản xuất nước mắm Phụng Hưng', description: '', photoUrl: '' },
//     { name: 'Vinpearl Safari Phú Quốc', description: '', photoUrl: '' }
//   ]
// });

// polls.push({
//   eventID: 'VN_RECORD_ASS_2018',
//   ownerID: 'VN_RECORD_ASS_ADMIN',
//   title: 'ĐỀ CỬ DANH SÁCH TOP 20 ĐIỂM ĐẾN HẤP DẪN CỦA VIỆT NAM 2018',
//   description: `Từ rất lâu rồi, người Việt Nam đã từng bước thiết lập nên rất nhiều các giá trị đỉnh cao. Thế nhưng theo thời gian, những giá trị đỉnh cao đó dần bị lãng quên hoặc được lưu lại tản mác trong nhiều tài liệu khác nhau mà thiếu đi một sự hệ thống để có thể giới thiệu đến đông đảo các tầng lớp xã hội và để lưu giữ lại cho muôn đời sau. Và mỗi ngày trôi qua, lại có rất nhiều giá trị được xác lập. Vậy các gtiá trị đó là gì và trong số đó đâu là những đỉnh cao mới cần được công bố và phổ biến rộng rãi? Đã có những Top bình bầu, chọn lựa các giá trị tốt nhất, cao nhất, mạnh nhất trong xã hội Việt Nam. Những giá trị đó ít nhiều tạo được dấu ấn riêng và phần nào khơi dậy không khí thi đua trong xã hội. Tuy nhiên, những bình bầu trên chỉ được thực hiện trong một số lĩnh vực nhất định mà chưa được xây dựng thành một hệ thống hoàn chỉnh.

//   Đất nước Việt Nam với hàng ngàn năm văn hiến, trải qua nhiều giai đoạn lịch sử hào hùng với  những chiến công hiển hách. Những thành tựu trong quá khứ đang là điểm tựa, là nền tảng cho sự phát triển của đất nước trong giai đoạn đổi mới hôm nay. Archimedes từng nói: “Hãy cho tôi một điểm tựa, tôi sẽ nâng cả trái đất lên”. Vậy tại sao chúng ta không tìm kiếm và thiết lập một hệ thống những giá trị đỉnh cao để làm “điểm tựa”, làm sức bật cho những tổ chức, cá nhân ở Việt Nam tiếp tục vươn xa hơn trong tương lai?`,
//   startDate: Math.round(new Date().getTime()) - 14 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 40 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://topplus.vn/Userfiles/Upload/images/s%C6%A1n%20%C4%91oong.jpg',
//   candidates: [
//     { name: 'Vườn quốc gia Phong Nha – Kẻ Bàng (Quảng Bình)', description: '', photoUrl: '' },
//     { name: 'Ruộng bậc thang Sapa (Lào Cai)', description: '', photoUrl: '' },
//     { name: 'Cao nguyên đá Đồng Văn (Hà Giang)', description: '', photoUrl: '' },
//     { name: 'Thung lũng Bắc Sơn (Lạng Sơn)', description: '', photoUrl: '' },
//     { name: 'Quần thể danh thắng Tràng An (Ninh Bình)', description: '', photoUrl: '' },
//     { name: 'Đảo Hòn Tre (Nha Trang, Khánh Hòa)', description: '', photoUrl: '' },
//     { name: 'Chùa Linh Phước (Đà Lạt, Lâm Đồng)', description: '', photoUrl: '' },
//     { name: 'Khu du lịch sinh Thái Xẻo Quýt (Tiền Giang)', description: '', photoUrl: '' }
//   ]
// });

// polls.push({
//   eventID: 'VN_RECORD_ASS_2018',
//   ownerID: 'VN_RECORD_ASS_ADMIN',
//   title: 'DANH SÁCH ĐỀ CỬ VÀ BÌNH CHỌN: TOP 20 ĐẶC SẢN TIẾN VUA NỔI TIẾNG CỦA VIỆT NAM',
//   description: `Chính điều đó đã thôi thúc chúng tôi – Trung tâm Top Việt Nam - trở thành nơi tìm kiếm, tập hợp, giới thiệu và quảng bá một cách rộng rãi những thành tựu xuất sắc, những giá trị văn hóa, xã hội do thiên nhiên ban tặng hoặc do cha ông sáng tạo ra, đồng thời không ngừng tìm kiếm những thành tựu mới, những đỉnh cao mới của người Việt Nam, có ảnh hưởng sâu sắc đến mọi mặt trong đời sống.

//   Từ năm 2010 đến nay, Trung tâm Top Việt Nam đã tiến hành thực hiện rất nhiều hành trình tìm kiếm các giá trị top trên khắp đất nước Việt Nam và công bố rộng rãi như: Top 50 điểm đến hấp dẫn nhất Việt Nam; Top 50 món ăn đặc sản nổi tiếng Việt Nam (lần 1 năm 2012-2013, lần 2 năm 2013, lần 3 năm 2015); Top các món ăn đặc sản nổi tiếng Việt Nam đạt kỷ lục Châu Á; Top 50 đặc sản trái cây nổi tiếng Việt Nam;… Đồng thời, hiện nay Trung tâm Top Việt Nam cũng đang tiến hành thực hiện các hành trình mới, như: hành trình tìm kiếm Top 500 món ăn đặc sản do các đầu bếp gia đình thực hiện; hành trình tìm kiếm Top 100 món ăn đặc sản của 100 nhà hàng, quán ăn nổi tiếng Việt Nam; … và cùng rất nhiều hành trình khác nữa đã, đang và sẽ tiếp tục được thực hiện bằng niềm đam mê và tự hào của người dân đất Việt trong tương lai.`,
//   startDate: Math.round(new Date().getTime()) - 20 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 52 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://topplus.vn/Userfiles/Upload/images/van-mieu-quoc-tu-giam.jpg',
//   candidates: [
//     { name: 'Bưởi đỏ Luận Văn (Thanh Hóa)', description: '', photoUrl: '' },
//     { name: 'Vải thiều Thanh Hà (Hải Dương)', description: '', photoUrl: '' },
//     { name: 'Cá kho làng Vũ Đại (Hà Nam)', description: '', photoUrl: '' },
//     { name: 'Nem nướng Ninh Hòa (Khánh Hòa)', description: '', photoUrl: '' },
//     { name: 'Mắm tôm Chà Gò Công (Tiền Giang)', description: '', photoUrl: '' },
//     { name: 'Mắm Nhum Sa Huỳnh (Quảng Ngãi)', description: '', photoUrl: '' },
//     { name: 'Gà Đông Tảo (Hưng Yên)', description: '', photoUrl: '' },
//     { name: 'Cá Trầm Hương (Lạng Sơn)', description: '', photoUrl: '' }
//   ]
// });

// polls.push({
//   eventID: 'VTV_AWARDS_2018',
//   ownerID: 'VTV_ADMIN',
//   title: 'Bình chọn VTV Awards 2018. Hạng mục Dẫn chương trình ấn tượng',
//   description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

//   50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

//   Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
//   startDate: Math.round(new Date().getTime()) - 10 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 60 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
//   candidates: [
//     { name: 'Hữu Bằng - SBD 117', description: '', photoUrl: '' },
//     { name: 'Minh Hà - SBD 159', description: '', photoUrl: '' },
//     { name: 'Ngô Kiến Huy - SBD 223', description: '', photoUrl: '' },
//     { name: 'Hạnh Phúc - SBD 06', description: '', photoUrl: '' },
//     { name: 'Minh Trang - SBD 185', description: '', photoUrl: '' }
//   ]
// });

// polls.push({
//   eventID: 'VTV_AWARDS_2018',
//   ownerID: 'VTV_ADMIN',
//   title: 'Bình chọn VTV Awards 2018. Hạng mục Chương trình Văn hóa - Khoa học xã hội - Giáo dục ấn tượng',
//   description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

//   50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

//   Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
//   startDate: Math.round(new Date().getTime()) - 5 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 70 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
//   candidates: [
//     { name: 'Điều ước thứ 7 - Bản hoà tấu cha và con - SBD 104', description: '', photoUrl: '' },
//     { name: 'Lời tri ân của những người thầy - SBD 34', description: '', photoUrl: '' },
//     { name: 'Mười ngày rung chuyển thế giới - SBD 67', description: '', photoUrl: '' },
//     { name: 'Thầy cô chúng ta đã thay đổi - SBD 35', description: '', photoUrl: '' },
//     { name: 'Việc tử tế : Không để ai bị bỏ lại phía sau - SBD 91', description: '', photoUrl: '' }
//   ]
// });

// polls.push({
//   eventID: 'VTV_AWARDS_2018',
//   ownerID: 'VTV_ADMIN',
//   title: 'Bình chọn VTV Awards 2018. Hạng mục Hình ảnh thời sự ấn tượng',
//   description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

//   50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

//   Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
//   startDate: Math.round(new Date().getTime()) - 1 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 50 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
//   candidates: [
//     { name: 'Chiến sĩ phòng cháy chữa cháy tay bị bỏng trong vụ cháy chung cư Carina - SBD 136', description: '', photoUrl: '' },
//     { name: 'Công chức đi lễ chùa trong giờ hành chính - SBD 62', description: '', photoUrl: '' },
//     { name: 'Người dân cả nước ăn mừng chiến thắng của đội tuyển U23 Việt Nam và hình ảnh đội tuyển VN tại SVĐ Thường Châu trong trận đấu với Uzberkistan - SBD 24', description: '', photoUrl: '' },
//     { name: 'Khai thác titan tan phá môi trường - SBD 198', description: '', photoUrl: '' },
//     { name: 'Thủ đoạn rút ruột xăng dầu - SBD 31', description: '', photoUrl: '' }
//   ]
// });

// polls.push({
//   eventID: 'VTV_AWARDS_2018',
//   ownerID: 'VTV_ADMIN',
//   title: 'Bình chọn VTV Awards 2018. Hạng mục Diễn viên nam ấn tượng',
//   description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

//   50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

//   Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
//   startDate: Math.round(new Date().getTime()) - 8 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 10 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
//   candidates: [
//     { name: 'Hồng Đăng - SBD 17', description: '', photoUrl: '' },
//     { name: 'Lê Vũ Long - SBD 121', description: '', photoUrl: '' },
//     { name: 'Chí Thiện - SBD 162', description: '', photoUrl: '' },
//     { name: 'Mạnh Trường - SBD 18', description: '', photoUrl: '' },
//     { name: 'Nhan Phúc Vinh - SBD 163', description: '', photoUrl: '' }
//   ]
// });

// polls.push({
//   eventID: 'VTV_AWARDS_2018',
//   ownerID: 'VTV_ADMIN',
//   title: 'Bình chọn VTV Awards 2018. Hạng mục Diễn viên nữ ấn tượng',
//   description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

//   50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

//   Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
//   startDate: Math.round(new Date().getTime()) - 12 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 5 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
//   candidates: [
//     { name: 'Hồng Diễm - SBD 20', description: '', photoUrl: '' },
//     { name: 'Thanh Hương - SBD 122', description: '', photoUrl: '' },
//     { name: 'Lan Phương - SBD 75', description: '', photoUrl: '' },
//     { name: 'Nhã Phương - SBD 165', description: '', photoUrl: '' },
//     { name: 'Bảo Thanh - SBD 19', description: '', photoUrl: '' }
//   ]
// });

// polls.push({
//   eventID: 'VTV_AWARDS_2018',
//   ownerID: 'VTV_ADMIN',
//   title: 'Bình chọn VTV Awards 2018. Hạng mục Phim truyền hình ấn tượng',
//   description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

//   50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

//   Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
//   startDate: Math.round(new Date().getTime()) - 4 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 100 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
//   candidates: [
//     { name: 'Cả một đời ân oán - SBD 14', description: '', photoUrl: '' },
//     { name: 'Cung đường tội lỗi - SBD 188', description: '', photoUrl: '' },
//     { name: 'Ghét thì yêu thôi - SBD 12', description: '', photoUrl: '' },
//     { name: 'Mộng phù hoa - SBD 11', description: '', photoUrl: '' },
//     { name: 'Ngày ấy mình đã yêu - SBD 160', description: '', photoUrl: '' }
//   ]
// });

// polls.push({
//   eventID: 'VTV_AWARDS_2018',
//   ownerID: 'VTV_ADMIN',
//   title: 'Bình chọn VTV Awards 2018. Hạng mục Ca sĩ ấn tượng',
//   description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

//   50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

//   Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
//   startDate: Math.round(new Date().getTime()) + 30 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 50 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
//   candidates: [
//     { name: 'Tùng Dương - SBD 10', description: '', photoUrl: '' },
//     { name: 'Trọng Hiếu - SBD 08', description: '', photoUrl: '' },
//     { name: 'Nhóm Ngọt - SBD 228', description: '', photoUrl: '' },
//     { name: 'Đức Phúc - SBD 119', description: '', photoUrl: '' },
//     { name: 'Mỹ Tâm - SBD 07', description: '', photoUrl: '' }
//   ]
// });

// polls.push({
//   eventID: 'VTV_AWARDS_2018',
//   ownerID: 'VTV_ADMIN',
//   title: 'Bình chọn VTV Awards 2018. Hạng mục Nhân vật của năm',
//   description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

//   50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

//   Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
//   startDate: Math.round(new Date().getTime()) + 12 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 90 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
//   candidates: [
//     { name: 'Bé Hải An (em bé hiến giác mạc) - SBD 182', description: '', photoUrl: '' },
//     { name: 'Đội tuyển U23 Việt Nam - SBD 48', description: '', photoUrl: '' },
//     { name: 'Quốc Cơ, Quốc Nghiệp - SBD 181', description: '', photoUrl: '' },
//     { name: 'Nữ MC Khiếm thị Lê Hương Giang - SBD 180', description: '', photoUrl: '' },
//     { name: 'Cầu thủ Lương Xuân Trường - SBD 65', description: '', photoUrl: '' }
//   ]
// });

// polls.push({
//   eventID: 'VTV_AWARDS_2018',
//   ownerID: 'VTV_ADMIN',
//   title: 'Bình chọn VTV Awards 2018. Hạng mục Chương trình của năm',
//   description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

//   50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

//   Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
//   startDate: Math.round(new Date().getTime()) + 20 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 60 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
//   candidates: [
//     { name: 'Du xuân: Nhân và mộc - SBD 39', description: '', photoUrl: '' },
//     { name: 'Đào mai tương ngộ - SBD 96', description: '', photoUrl: '' },
//     { name: 'Gặp nhau cuối năm - SBD 45', description: '', photoUrl: '' },
//     { name: 'Từ những cậu bé chân trần tới người hùng sân cỏ - SBD 43', description: '', photoUrl: '' },
//     { name: 'Shark Tank Việt Nam - Thương vụ bạc tỷ - SBD 46', description: '', photoUrl: '' }
//   ]
// });

// polls.push({
//   eventID: 'VTV_AWARDS_2018',
//   ownerID: 'VTV_ADMIN',
//   title: 'Bình chọn VTV Awards 2018. Hạng mục Phim Tài liệu ấn tượng',
//   description: `Khép lại vòng bình chọn 1, hôm nay (22/8), danh sách top 5 đề cử của 10 hạng mục giải thưởng VTV Awards 2018 đã được công bố. Theo kết quả vòng 1, những đề cử trong top 5 đều là những gương mặt, những chương trình và những bộ phim được khán giả truyền hình yêu thích trong năm qua.

//   50 đề cử vượt qua vòng 1 này sẽ tiếp tục bước vào cuộc đua ở vòng thứ 2. Ở vòng 2 này, bên cạnh sự bình chọn của khán giả còn có sự tham gia của các chuyên gia hàng đầu trong các lĩnh vực đề cử. Điểm bình chọn của khán giả cộng điểm bình chọn của các chuyên gia rồi chia đều sẽ chọn ra đề cử giành chiến thắng.

//   Thời gian bình chọn vòng 2 bắt đầu từ ngày 22/8 và kết thúc vào 7h09' ngày 7/9/2018. Sau thời gian trên, cổng bình chọn sẽ đóng, Ban tổ chức sẽ tổng hợp kết quả và công bố, trao giải cho các đề cử chiến thắng vào Lễ trao giải VTV Awards - Sắc màu 2018.`,
//   startDate: Math.round(new Date().getTime()) + 3 * 24 * 60 * 60 * 1000,
//   endDate: Math.round(new Date().getTime()) + 80 * 24 * 60 * 60 * 1000,
//   photoUrl: 'http://daotao.vtv.vn/wp-content/uploads/2018/05/SM-2018.jpg',
//   candidates: [
//     { name: 'Ánh sáng tháng Mười - SBD 94', description: '', photoUrl: '' },
//     { name: 'Bản tình ca của đá - SBD 60', description: '', photoUrl: '' },
//     { name: 'Hành trình bất tận - SBD 23', description: '', photoUrl: '' },
//     { name: 'Miền đất hứa - SBD 127', description: '', photoUrl: '' },
//     { name: 'Về quê hương mẹ - SBD 87', description: '', photoUrl: '' }
//   ]
// });


fs.writeFileSync(path.join(__dirname, '../db/polls.json'), JSON.stringify(polls, null, 4));
