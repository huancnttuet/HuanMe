import Card from '../../components/Blog/Card'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './index.css'
const Blog = () => {
	const data = [
		{
			title: 'Xàm xí',
			subtitle: 'Hà Nội, 12:46 07/04/2022',
			img: '\\assets\\img\\blog\\image1.jpg',
			content: `<p>Cảm thấy thật trống rỗng...</p>
      
      <p>Tâm sự của người nghiện...</p>
      <p> 
        Như 1 thói quen, dù đã qua ngày mới rồi nhưng 2 mắt vẫn dán vào chiếc
        màn hình 27 inch. Sự cô đơn có lẽ không theo đuổi tôi lâu như thế.
        Ngồi nghĩ lại về những chuyện mình đã trả qua thật sự không rõ mình
        muốn gì nữa. Trước hồi còn đi học, mình từng ao ước có bộ 1 PC để cày
        game, rồi 1 bộ gear đủ xịn sò nữa chứ. Bây giờ, sau khi đi làm được 1
        thời gian thì cũng hoàn thành được ước mơ nho nhỏ thời sinh viên của
        mình. Người ta bảo rằng khi đạt được thứ gì đó thì thường sẽ không
        trân trọng nó nữa, có lẽ bây giờ khi đã có đủ những thứ tôi muốn rồi
        đáng ra phải hạnh phúc chứ, ấy mà sao vẫn cảm thấy trong lòng mình
        trống rỗng đến vậy. Chợt nhận ra có nhiều thứ thật khó để
        có được. Thời gian trôi
        nhanh quá, tối nay đi gặp đứa bạn chơi thân hồi 2 đứa còn nằm ôm nhau
        lúc mới đi bộ đội năm 18. Ấy vậy mà bây giờ đã thấm thoát 7 năm rồi.
      </p>`,
		},
		{
			title: 'Chiếc lót chuột mới',
			subtitle: 'Trường ĐH Công nghệ 16:00, 10/03/2022',
			img: '\\assets\\img\\blog\\image2.jpg',

			content: `<p>Mất gần 7 năm để có:()..</p>
      <p>
        Khi thi lại đại học năm 2017, mình có tạch Bách Khoa nên cái duyên đưa mình đến với UET. 
        Hơn 4 năm vừa học vừa chơi, tính ra toàn chơi chứ học thì không được nhiêu cả. 
        Đến lúc ra trường thì may mắn được cái bằng tốt nghiệp hihi. Ét o Ét...
      </p>`,
		},
	]

	return (
		<>
			<Header />
			<main className='main'>
				{/* <div class='header'>
					<h2>Blog Name</h2>
				</div> */}

				<div class='row'>
					<div class='leftcolumn'>
						{data.map((e) => (
							<Card data={e}></Card>
						))}
					</div>
					<div class='rightcolumn'>
						<div class='card'>
							<h2>About Me</h2>
							<div class='fakeimg' style={{ height: '100px' }}>
								Image
							</div>
							<p>
								Some text about me in culpa qui officia deserunt mollit anim..
							</p>
						</div>
						<div class='card'>
							<h3>Popular Post</h3>
							<div class='fakeimg'>Image</div>
							<br />
							<div class='fakeimg'>Image</div>
							<br />
							<div class='fakeimg'>Image</div>
						</div>
						<div class='card'>
							<h3>Follow Me</h3>
							<p>Some text..</p>
						</div>
					</div>
				</div>

				<div class='footer'>
					<h2>Footer</h2>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Blog
