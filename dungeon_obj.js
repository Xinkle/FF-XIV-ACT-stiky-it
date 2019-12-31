﻿/*
	던전 이름과 스티키 메모 내용을 적는 파일입니다.
	필드 외에 임무(던전, 토벌전) 관련만 여기에 적으세요.

	!주의! 키 값은 지역명이 아닙니다. !임무명! 입니다.
	ex) 임무명 : 이프리트 토벌전 / 지역명 : 불꽃신의 제단
	ex) 임무명 : 진 이프리트 토벌전 / 지역명 : 불꽃신의 제단
	이 파일에선 임무명인 "진 이프리트 토벌전" 으로 키를 적어서 진 이프리트 토벌전 전용 공략만 표시되게 할 수 있습니다.
*/

var objDG = {

"Default" : {
txt : "해당 던전의 공략이 없습니다.<br>나만의 공략을 메모 하세요.",
},

//LV ~47 던전

"사스타샤 침식 동굴" : {
	txt : "\
	<br>\
	1넴 도륙자<br>\
	마비장판에 주의하며 딜한다<br>\
	<br>\
	2넴 메디슨 선장<br>\
	그냥 딜한다, 탱은 중간에 소환되는 개의 어그로도 잡아주도록 한다<br>\
	<br>\
	3넴 범고래이빨 덴<br>\
	총 4곳에 물거품이 인다. 정공법은 이를 꺼트리며 진행하는 것이지만<br>\
	딜이 높아진 현재는 그냥 보스를 집중공격하는 것을 선호한다<br>\
	<br>\
	<br>\
	<br>\
	"},
	"탐타라 묘소" : {
	txt : "\
	<br>\
	1넴 사교의 보주<br>\
	쫄 제거 후 나오는 몹 정리<br>\
	<br>\
	2넴 사교의 보주<br>\
	쫄 제거 후 나오는 몹 정리<br>\
	<br>\
	3넴 절대왕 갈반스<br>\
	보스 딜링중 선 연결되는 쫄부터 정리하고 딜링<br>\
	<br>\
	<br>\
	<br>\
	"},
	"구리종 광산" : {
	txt : "\
	<br>\
	1넴 분노의 코토스<br>\
	나오는 모든 몹을 정리한다<br>\
	<br>\
	2넴 분노한 고름<br>\
	탱커가 어글을 잡고, 플람보의 어글도 끌어서 보스에게 유인, 폭파시킬때마다 보스가 분열되며,<br>\
	딜러들은 소방수 쫄을 우선적으로 제거해준다<br>\
	<br>\
	3넴 힘센팔뚝 귀게스<br>\
	딜이 안좋을때 : 하인이 나오면 제거해준다<br>\
	딜이 좋을때 : 하인을 무시하고 보스 딜링<br>\
	<br>\
	<br>\
	<br>\
	"},
	"할라탈리 수련장" : {
	txt : "\
	<br>\
	1넴 화염갈기<br>\
	화로에서 나오는 쫄 처치<br>\
	<br>\
	2넴 우레의 가브르<br>\
	보스를 호수 밖으로 유인해서 처치한다<br>\
	보스가 호수로 들어가서 전기를 뿜으면 호수로 들어가지 말고 전기정령을 잡아주자<br>\
	<br>\
	3넴 짐승투사 탕가타<br>\
	딜 도중 무적상태가 되는데 불정령3마릴 잡으면 해제됨<br>\
	1넴과 같은 방식으로 화로쫄이 나오니 주의<br>\
	<br>\
	<br>\
	<br>\
	"},
	"토토라크 감옥" : {
	txt : "\
	<br>\
	1넴 아홉꼬리 커얼<br>\
	그냥 딜한다.<br>\
	<br>\
	2넴 아홉꼬리 커얼<br>\
	보스 딜하다 쫄을 잡고 다시 딜한다<br>\
	<br>\
	3넴 그라피아스<br>\
	딜하던 도중 꼬리가 변이되면 장판 범위에서 나오도록 유도하고 꼬리부터 딜한다.<br>\
	방에 있는 고치는 모두 터트려주도록 한다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"하우케타 별궁" : {
	txt : "\
	<br>\
	1넴 부인의 청지기<br>\
	장판을 주의하면서 때려잡아주자<br>\
	<br>\
	2넴 별궁의 광대&집사장<br>\
	광대->집사 순으로 정리하면 편하다<br>\
	유저의 선호도에 따라 반대로 정리하기도 한다<br>\
	<br>\
	3넴 레이디 아망딘<br>\
	딜하던 도중 등불이 켜지면 등불부터 끄고 딜링하도록 하자<br>\
	만일 쫄이 뜰시 쫄도 잡아주면 좋다<br>\
	경비원이 뜰 시 경비원을 먼저 집중공격하자. 스톤스킨을 걸어준다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"브레이플록스의 야영지" : {
	txt : "\
	<br>\
	1넴 노란 왕사다새<br>\
	장판을 피하면서 딜하도록 하자. 장판중 마비장판이 있으므로 주의<br>\
	<br>\
	2넴 지옥불 도마뱀<br>\
	딜링중 고블린이 나오면 몹이 어그로 상관없이 고블린을 따라다니며 불을 뿜으니 주의, 쫄이 나오면 쫄을 잡고 딜링<br>\
	<br>\
	3넴 장수도롱뇽<br>\
	딜링중 일정 피 이상이 되면 4넴이 나와 3넴을 잡아먹음 그후 조금 더 4넴 딜링시 퇴근<br>\
	<br>\
	4넴 아이아타르<br>\
	독장판을 깔고 그 위에 있으면 보스의 피가 차니 탱커가 밖으로 유도해 줄 것<br>\
	<br>\
	<br>\
	<br>\
	"},
	"카른의 무너진 사원" : {
	txt : "\
	<br>\
	공통 주의사항<br>\
	벌 몹은 빨리 잡지 않으면 탱커에게 '마지막 벌침'이란 스킬을 시전하며 자살, 체력비례의 큰 데미지를 준다.<br>\
	<br>\
	1넴 테라토사우루소<br>\
	'죽음의 선고' 디버프가 걸리면 재빨리 발판 세개 중 빛나는 것을 밟아서 해제해야 한다.<br>\
	<br>\
	2넴 사원수호자<br>\
	골렘의 영혼석이 부서져야 본체에 딜이 들어가기 시작한다. 영혼석->본체 순으로 딜하자.<br>\
	<br>\
	3넴 아제마 심판관<br>\
	'아제마 배심원' 을 제외한 모든 패턴을 피하면서 보스를 딜하자.<br>\
	아제마 배심원은 장판 위에서 잡아주어야 한다.<br>\
	만일 파티의 딜이 부족할 경우, 검은 장판을 까는 막대 범위안에 들어가서 잡아주고 진행하자.<br>\
	타임어택식으로, 전멸기 수준의 데미지가 들어오기 때문.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"나무꾼의 비명" : {
	txt : "\
	<br>\
	1넴 미르미돈 공주<br>\
	광역기를 피하면서 딜링한다.<br>\
	소환되는 쫄을 힐러가 모두 어그로를 끌고 맵을 빙글빙글 도는 동안 탱과 딜러가 보스를 잡는 공략도 있으며<br>\
	범용적으로 쓰이는 편이다<br>\
	<br>\
	2넴 거대 땅굴지렁이<br>\
	보스가 땅에 파고들면 최대한 맵의 외곽을 향해 달리자<br>\
	<br>\
	3넴 키마이라<br>\
	산떨용붙 만 기억하자, 산양의 머리가 빛나면 떨어지고 용의 머리가 빛나면 붙으면 된다.<br>\
	표식이나 보라색 구슬이 뜨면 외곽으로 유도해주자.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"돌방패 경계초소" : {
	txt : "\
	<br>\
	1넴 추도유도<br>\
	불꽃 장판을 파티원에게 맞지 않게 하기 위해 계속 벽쪽으로 유인한다,<br>\
	중간에 어그로 상관없이 맵 끝으로 이동해서 '징벌'을 사용하므로 주의<br>\
	보스의 뒤로 이동하면 된다.<br>\
	<br>\
	2넴 코쉬체이<br>\
	탱커는 보스방 입구 부근에 네임드를 주차하고, 파티원중 한명(보통 힐러)이 대포를 조작하여<br>\
	창문 밖으로 날아오는 이스케빈드를 저격하자.<br>\
	<br>\
	3넴 이스케빈드<br>\
	장판이 조금 껄끄러운 편인데, 장판을 주의하면서 딜링하면 된다.<br>\
	이스케빈드가 착륙할 때 밀려나므로, 탱커는 자리를 잘 잡도록 한다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"제멜 요새" : {
	txt : "\
	<br>\
	1넴까지 가는 길<br>\
	보라색 크리스탈 장판 위에선 데미지가 많이 경감되므로, 보통 이 구간까지 모든 몹을 모는 편이다<br>\
	예전에는 이를 이용한 '제멜런'이라는 레벨업 방법이 존재했다.<br>\
	여기서 등장하는 꿰뚫어보는 눈알은 딜이 들어가지 않으니 주의할 것<br>\
	<br>\
	1넴 꿰뚫어보는 눈알<br>\
	보라색 크리스탈 장판 위에서만 보스에게 데미지가 들어가니 보스를 끌어와서 딜하자<br>\
	중간에 크리스탈의 빛이 희미해지면 다른 크리스탈 장판 위로 이동하여 보스를 딜하면 된다.<br>\
	<br>\
	2넴 타울러드<br>\
	맵 주변에서 공격이 불가능한 쫄들이 계속 불덩이를 던져댄다. 잘 피하면서 보스를 딜하자.<br>\
	<br>\
	3넴 바트라알<br>\
	딜링을 하다 보면 크리스탈과 보스가 연결되면서 데미지가 들어가지 않는데, 크리스탈부터 부숴주도록 하자<br>\
	도중 마크가 생기면서 보스가 긴 장판 공격으로 저격을 해오는데, 대상자는 파티원이 맞지 않게 잘 피해주자<br>\
	<br>\
	<br>\
	<br>\
	"},
	"금빛 골짜기" : {
	txt : "\
	<br>\
	1넴 금고지킴이<br>\
	디버프가 2중첩이 되면 열매를 먹어 풀면 된다<br>\
	<br>\
	2넴 동전애호가<br>\
	공격범위가 넓으며 장판의 범위가 보이지 않고 보스방이 넓다.<br>\
	보스가 후려치기를 쓸 때는 뒤로, 휘두르기는 최대한 멀리 도망가자<br>\
	힐러와 딜러는 보스가 '아이 오브 비홀더'와 '노려보기'라는 원거리 레이저 스킬을 사용하면 피하도록 한다.<br>\
	<br>\
	3넴 수전노의 아내<br>\
	장판을 밟으면 디버프가 잔뜩 쌓이기에 장판을 조심하면서, 몰볼 묘목이 생성되면 잡아주고<br>\
	1넴처럼 디버프가 3중첩이 되면 열매를 하나 먹어주면 된다<br>\
	<br>\
	<br>\
	<br>\
	LV 50 던전<br>\
	<br>\
	<br>\
	"},
	"방랑자의 궁전" : {
	txt : "\
	<br>\
	주의사항<br>\
	톤베리 추적자가 쫓아오는데, 가까이 가면 아픈 칼빵을 당하며 때릴수도 없으니 도망가면서 진행한다<br>\
	<br>\
	1넴 성지 수호자<br>\
	장판을 피하면서 딜링을 하면 된다.<br>\
	<br>\
	2넴 거대 바바루아<br>\
	쫄들을 제거하며 보스를 딜하면 된다<br>\
	<br>\
	3넴 톤베리 왕<br>\
	절단자를 잡을때마다 원한 스택이 올라가서 큰 데미지가 들어오므로, 적당히 잡아가면서 보스를 딜하자<br>\
	요새는 그냥 보스만 딜하는 추세이다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"옛 암다포르 성" : {
	txt : "\
	<br>\
	1넴 영혼지배자<br>\
	미치광이 사제는 페이크 보스이며, 딜하다 보면 진짜 보스가 등장한다<br>\
	골렘 쫄류를 잘 피해가며 (또는 잡고) 보스를 딜한다<br>\
	<br>\
	2넴 악마의 벽<br>\
	장판을 잘 피해야 한다. 특히 주의할 것은 중간의 밀치기 인데 생긴것과 다르게 원형이라 좀 잘못 서있으면 바로 낙사한다<br>\
	따라서 항상 중앙을 유지해주는것이 좋다. 밀치기 이후 벽이 점점 다가와서 끝까지 다가오면 전멸한다<br>\
	<br>\
	3넴 아난타보가<br>\
	딜링 중 '참사 도래'라는 스킬을 쓰는데, 석상 뒤로 가면 피할 수 있다<br>\
	그렇게 되면 쫄이 생성되므로 쫄을 잡고 계속 딜하면 된다<br>\
	중간에 보라색 징이 생기면 곧 그곳에 주변에 데미지를 주는 구체가 생성되므로 멀리 가서 깔아준다<br>\
	<br>\
	<br>\
	<br>\
	"},
	"시리우스 대등대" : {
	txt : "\
	<br>\
	1넴 가라앉지 않는 사이먼드<br>\
	딜이 부족하면 위험할 수 있다. 최대한 쫄을 잡아내가며 딜을 빠릿하게 하자.<br>\
	크리스탈 3중첩이 될 때마다 범위 데미지가 들어오니, 거리를 유지하면서 딜러는 빨리 쫄을 처리하도록 한다<br>\
	<br>\
	2넴 즈<br>\
	2개의 점박이 알을 먼저 부수고, 알이 부화할 때까지 보스를 딜하다가<br>\
	수평아리->암평아리 순으로 제거 후 다시 보스를 딜하면 된다<br>\
	알을 3개 이상 깨면 즈가 분노하여 랜덤 대상에게 큰 데미지와 스턴을 거니 주의<br>\
	힐량이 좋을 경우 그냥 즈만 딜 해도 무방<br>\
	<br>\
	3넴 세이렌<br>\
	힐러는 계속 생기는 디버프를 집중적으로 제거해주며, 해병과 수병들이 나오면 재빨리 제거해준다<br>\
	세이렌이 외곽에 나타날 시 보고있는 방향으로 돌진을 시전하므로 피해주고<br>\
	재빨리 중앙에 모여 세이렌의 광역 공격을 피해주면 된다<br>\
	세이렌의 노랫소리 디버프는 체력을 풀로 회복하면 사라진다. 힐업 요망<br>\
	<br>\
	<br>\
	<br>\
	"},
	"구리종 광산(어려움)" : {
	txt : "\
	<br>\
	1넴 헤카톤 정신지배자<br>\
	탱커가 맨 끝까지 모든 몹을 끌고 간 후, 보스가 불을 붙이는 것을 피한다.<br>\
	'플람보' 출현시 불 붙은 곳에 '플람보'가 닿기 전에 제거해주어야 한다<br>\
	<br>\
	2넴 고그마골렘<br>\
	일단 어글을 잡아 준 뒤, 골렘이 걸어다닐 때 폭탄을 집어 놔 주자<br>\
	폭탄은 말을 걸어 집은 후 보조스킬탭의 놓기를 사용하면 놓을 수 있다.<br>\
	딜을 해도 딜이 들어가긴 하지만 반감되어 들어가므로, 딜을 하기 보단 폭탄을 두어 잡는 것이 정석이다.<br>\
	<br>\
	3넴 복수의 우라노스<br>\
	보스를 모래판 밖으로 끌고 와 딜을 하다가, 심연지렁이가 먹이를 찾고있다는 메세지가 뜨면<br>\
	한명이 광석을 모래판에 놓고 오면 된다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"하우케타 별궁(어려움)" : {
	txt : "\
	<br>\
	1넴 별궁의 광대<br>\
	쫄을 제거 후 보스를 제거한다<br>\
	<br>\
	2넴 애쉬<br>\
	대부분의 공격이 장판 공격이니 장판을 잘 피하면서 때려준다<br>\
	<br>\
	3넴 할리카르나소스<br>\
	쫄이 나오면 무조건 쫄부터 죽여준다. 쫄 피가 많을수록 보스가 흡수 후 쓰는 광역기 데미지가 세진다<br>\
	그 외에는 딜링에 집중한다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"옛 암다포르 시가지" : {
	txt : "\
	<br>\
	1넴 부패한 대식가<br>\
	딜링 중 파티원 한명을 보스가 먹어버리는데, 보스의 입을 공격해서 내보내주어야 한다.<br>\
	<br>\
	2넴 아리오크<br>\
	일정 주기로 하나씩 생성되는 '목장 와무라'를 잡아서 '요마의 향기' 라는 버프를 획득하면<br>\
	하늘을 날고있던 아리오크가 내려오며, 딜을 하다 버프가 사라질 것 같으면 와무라를 한번 더 잡아<br>\
	버프를 갱신해야 한다. 만약 하늘로 올라갈 시 피를 크게 회복하니 주의할 것. 이를 반복한다.<br>\
	<br>\
	3넴 디아볼로스<br>\
	전투가 시작되면 문 위의 문양이 빛나는데, 이를 외워두어야 한다. (보통 징을 찍어 표시한다)<br>\
	이후 딜링중 '재앙의 전조'라는 즉사기를 시전하면, 같은 문양의 문에 말을 걸어 문을 열면 피할 수 있다.<br>\
	딜이 좋고 템이 되면 그냥 무시하고 보스를 딜링해도 무관하다<br>\
	<br>\
	<br>\
	<br>\
	"},
	"할라탈리 수련장(어려움)" : {
	txt : "\
	<br>\
	1넴 피라크몬<br>\
	전체적으론 금빛 골짜기의 동전 애호가와 비슷하다.<br>\
	방 전체 색이 변하고 스킬을 준비 할 때, 방에 있는 기계를 작동시키면<br>\
	돌아다니던자동인형 주변에 파란 원이 생긴다. 그 안에 들어가 버프를 받아야 살 수 있다.<br>\
	<br>\
	2넴 카토블레파스<br>\
	보스의 눈이 노랗게 변하면 구슬에 말을 걸어 디버프를 얻어야<br>\
	보스의 눈이 빨갛게 되면서 들어오는 데미지를 버틸 수 있다.<br>\
	그후 보스의 눈에 집중공격을 한다<br>\
	<br>\
	3넴 폐주교 무무에포<br>\
	4명의 검투사 처리 후 무무에포->나라심하 순으로 제거해주면 된다<br>\
	무무에포가 중간에 파티원에게 쇠사슬을 걸면 주술도구에 말을 걸어 해제해주어야 한다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"브레이플록스의 야영지(어려움)" : {
	txt : "\
	<br>\
	1넴 푸른손 지휘관<br>\
	장판을 잘 피하면서 딜해주며, 쫄이 나오면 우선적으로 제거해준다.<br>\
	<br>\
	2넴 3호 고블린탱크<br>\
	비슷하게 장판을 잘 피하면서 쫄이 나오면 우선적으로 제거해준다.<br>\
	<br>\
	3넴 4호 고블린탱크<br>\
	폭탄을 뿌리면 공격을 통해 외곽으로 밀어낸다<br>\
	보스가 방 주위를 빙빙 돌때는 타겟팅이 되지 않으니 중앙에 모여준다.<br>\
	거대폭탄을 소환하면 거대폭탄을 잡고 보스를 딜링하면 된다<br>\
	<br>\
	<br>\
	<br>\
	"},
	"난파선의 섬" : {
	txt : "\
	<br>\
	1넴 사스콰치<br>\
	사스콰치가 배고파하면 바나나를 따서 줘야하는데, 이 때 쫄이 등장해서 바나나를 탐내므로 쫄을 제거해준다.<br>\
	<br>\
	2넴 쇼름<br>\
	쇼름이 각각 짝수번째에 땅속으로 들어가면 소용돌이를 시전하는데, 이때 물방울 속으로 들어가야 한다.<br>\
	<br>\
	3넴 크라켄<br>\
	머리 위에 초록색 징이 찍히면 다른 섬으로 이동하면 된다.<br>\
	크라켄 본체가 아니라 다리를 모두 제거하면 크라켄이 퇴각하고 완료된다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"탐타라 묘소(어려움)" : {
	txt : "\
	<br>\
	1넴 입회인 리아빈<br>\
	광역기를 쓰지 말고 모두 한데 모여서 리아빈만 극딜하면 된다.<br>\
	<br>\
	2넴 예비용 육체<br>\
	보라색 구슬이 파이요레이요에게 닿으면 전멸하므로 플레이어들이 보라색 구슬을 대신 비벼서 맞아주어야 한다.<br>\
	<br>\
	3넴 용감한 에이비어 & 순백의 에다<br>\
	장판을 피하면서, 쫄을 우선적으로 제거하면서 딜링하면 된다<br>\
	장판이 정신없게 깔리니 주의<br>\
	<br>\
	<br>\
	<br>\
	"},
	"돌방패 경계초소(어려움)" : {
	txt : "\
	<br>\
	1넴 고리니치<br>\
	계속 따라가면서 딜링해주면 된다.<br>\
	<br>\
	2넴 쿠카페라<br>\
	모두가 대포를 잡고, 엔피씨의 설명에 따라 상황에 맞춰 대포를 쏘면 된다<br>\
	(보스가 빨갛게 빛나면 쏘지 말고, 보스가 범위기를 쓰면 뇌격탄으로 스턴시킨다)<br>\
	<br>\
	3넴 기루베가노스<br>\
	이녀석은 아무리 탱커가 어그로를 잡아도 무시하고 모든 패턴이 랜덤한 파티원을 공격한다.<br>\
	딜하다보면 두마리가 되니 잡던걸 마저 잡고 나머지 한마리를 잡도록 하자.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"얼음외투 대빙벽" : {
	txt : "\
	<br>\
	1넴 완딜<br>\
	중간에 눈보라가 몰아칠 때 가만히 있으면 중첩이 쌓이는데, 3중첩이 되면 얼어붙는다<br>\
	장판을 잘 피하면서 쫄을 제거하고 딜해주자<br>\
	<br>\
	2넴 예티<br>\
	예티가 숨결을 쓸때 잡몹들이 그 장판 위에 있으면 눈덩이로 변한다<br>\
	같은 눈덩이에 계속 맞춰주어 눈덩이를 크게 만들고 공격해서 예티에게 굴리면 큰 데미지가 들어간다.<br>\
	다만 장판기 사용시에 굴려주면 데미지와 함께 장판기가 끊기므로, 한두개정도 남겨서 장판을 끊는 용도로 써야한다.<br>\
	쫄중 '오거'는 잡지 않고 그냥 두면 눈덩이를 부수니 주의<br>\
	<br>\
	3넴 펜리르<br>\
	얼음기둥이 떨어지고, 그중 짝수번째 얼음 기둥은 몇개는 사라지나 한개가 남는데<br>\
	펜리르가 '달을 향한 포효' 라는 긴 시전시간의 기술을 사용하면 얼음기둥 뒤에 있어야 한다.<br>\
	그렇지 않으면 즉사수준의 데미지가 들어온다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"사스타샤 침식 동굴(어려움)" : {
	txt : "\
	<br>\
	1넴 칼라보스<br>\
	어그로와 상관없이 주기적으로 꼬리치기를 시전하는데,<br>\
	처음을 제외하고선 탱커와 선이 연결된 후 탱커를 기절시키고 사용합니다<br>\
	이 선을 다른 딜러가 가져가주면 딜러가 스턴이 걸리니 웬만하면 스턴은 딜러가 맞아줍시다.<br>\
	이걸 끊어주지 않으면 탱이든 어떤 클래스든 아주 아픈 데미지가 들어온다.<br>\
	스턴 등의 기술로 끊어주거나 힐러가 열심히 힐업을 해주도록 하자<br>\
	<br>\
	2넴 전직 선장 매디슨<br>\
	쫄을 계속 잡아주면서 이리저리 돌아다니는 매디슨 선장을 때려주자<br>\
	중간에 총을 쏘기 시작하면 쫄을 잡는걸 멈추고 메디슨 선장을 잠시 집중해서 때려주자, 그래야 멈춘다<br>\
	<br>\
	3넴 크라켄<br>\
	크라켄의 '촉수'와 '다리', '머리'가 있는데 탱커는 머리를 계속 쳐서 어그로를 먹고<br>\
	딜러진들이 '촉수'는 그냥 두고 '다리'만을 계속 제거해주어야 한다.<br>\
	머리를 잡으면 클리어<br>\
	<br>\
	<br>\
	<br>\
	"},
	"카른의 무너진 사원(어려움)" : {
	txt : "\
	<br>\
	1넴 손상된 아제마 심판관<br>\
	시작할때 한 부위가 빛나는데, 플래쉬나 압도, 촉발 등으로 어그로를 잡아주고 붉게 빛나는 곳을 집중해서 때려주자<br>\
	부술시 잠시 무너지고, 쫄들이 나온 뒤 다시 재생되는데 이때 또 약점 빛난다.<br>\
	반복하다보면 목과 팔이 없는 불쌍한 모습으로 덤벼오는데, 이때 '모래늪' 장판에 주의하며 딜을 해서 잡아준다.<br>\
	<br>\
	2넴 사보텐더 여제<br>\
	여제가 바늘 수를 세기 시작하면 여제에게 모든 딜링을 집중해서 끊어주어야 한다.<br>\
	만약 '근위병'이 나올시 근위병이 여제에게 감싸기를 시전하기 때문에 근위병부터 잡아주도록 한다.<br>\
	보통 힐러가 보스를 제외한 모든 쫄어글을 먹은 채 빙빙 돌고, 나머지가 여제를 극딜하는 식으로 진행한다.<br>\
	<br>\
	3넴 아제마 교황<br>\
	장판을 계속 피해주며 딜하다가 맵 주변에 생기는 관에서 나오는 미이라를 피해주자<br>\
	4중첩이 되면 캐릭터가 관속으로 들어가면서, 잠시동안 미이라가 되어 주변 파티원을 공격한다..<br>\
	탱커가 걸리면 어그로가 풀리므로 주의할 것.<br>\
	또한 빨간 징 대상자에게 선이 연결될 시 중첩이 계속 올라가므로 스턴기로 끊어주자.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"묵약의 탑" : {
	txt : "\
	<br>\
	1넴 아인핸더<br>\
	청린수 탱크를 계속 맵 외곽으로 밀어주면서, 장판을 피하면서 딜하자<br>\
	맵 전범위 공격인 큰 청린수 탱크에 주의하도록 한다.<br>\
	<br>\
	2넴 마도 건십<br>\
	보통의 장판과 달리 범위에 들어가면 지속적인 데미지를 주는 화염방사는 조심하자<br>\
	랜덤한 대상을 목표로 일직선으로 날아가며 장판을 뿌리는데 이에 주의해서 깔 것<br>\
	쫄이 나오면 쫄부터 제거해주자<br>\
	<br>\
	3넴 미드가르드오름<br>\
	처음에 일으키는 신기루 드래곤은 미드가르드 오름과 멀리 주차해서 딜하고<br>\
	두번째 일으키는 신기루 드래곤은 미드가르드 오름과 가깝게 주차해서 딜해야한다<br>\
	중간에 전멸기를 캐스팅하고, 아스트라이아 라는 쫄이 나오면 재빨리 잡아준 후,<br>\
	떨어트린 기계를 작동시켜 방어막을 켜고 들어가서 전멸기를 막아내면 된다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"방랑자의 궁전(어려움)" : {
	txt : "\
	<br>\
	1넴 뿔 꺾인 코헤쟈<br>\
	땅에 박힌 창을 제일 우선적으로 제거해주면서 딜하면 쉽다<br>\
	<br>\
	2넴 축축한 졸루쟈<br>\
	처음에 깔리는 토템을 모두 밟아보고, 각 색깔에 대한 효과를 기억한다. (판마다 랜덤으로 지정된다.)<br>\
	효과는 각각 과중력, 개구리 변신, 데미지 증가, 불 속성 피해 증가이다.<br>\
	딜을 하다보면 딜러들 중 한명이 개구리로 변하게 되는데 이때 개구리 변신을 시키던 색의 토템을 밟으면 풀린다.<br>\
	데미지 증가 토템은 나오면 딜러가 밟아주도록 하자. 들어가는 데미지가 강해진다.<br>\
	<br>\
	3넴 빛나는 비늘의 몰라쟈쟈<br>\
	탱커는 계속 보스를 끌고 다니면서 보스가 설치하는 '깃발' 장판 위에서 보스를 나오게 해야한다.<br>\
	'깃발'이 아닌 '제기'는 설치시에 무조건 부숴주도록 한다.<br>\
	랜덤한 대상에게 20초짜리 죽음의 선고 (20초 후에 즉사) 디버프를 건다. 이때 피를 꽉 채우면 해제된다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"옛 암다포르 성(어려움)" : {
	txt : "\
	<br>\
	1넴 앵크해그<br>\
	랜덤한 파티원에게 징표를 찍고 번개를 쏘는데 매우 아프므로 바로 피뢰침 석상 뒤로 숨어주어야 한다.<br>\
	또한 랜덤한 대상에게 직선 돌진 장판을 까는데 유도이므로 대상자는 혼자만 맞기 위해<br>\
	최대한 보스에게 가까이 다가간다. (범위가 줄어듦)<br>\
	모든 기술은 석상에 맞지 않도록 주의한다<br>\
	<br>\
	2넴 부기맨<br>\
	보스를 딜하다보면 보스가 반투명해지는데, 이때 구슬을 부수고 버프를 받은 뒤, 보스와 붙어있으면<br>\
	잠시 후 버프가 터지면서 보스의 투명화가 풀린다. 이를 반복한다.<br>\
	맞다 보면 쫄을 소환하는데 이때는 쫄을 먼저 제거해주도록 하고,<br>\
	잠시 후 부기맨이 두개로 분열하는데 같은 방법으로 제거한다.<br>\
	<br>\
	3넴 페르디아<br>\
	전투중 쫄이 나오는데 무조건 쫄을 제거해주어야 한다. (파티원을 자리에 고정시키고 장판을 쓴다)<br>\
	이외엔 장판만 잘 피해주면서 딜을 하면 된다.<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	LV 51-59 던전<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"어스름 요새" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 올리펀트<br>\
	<br>\
	장판을 잘 피해주면서 딜한다<br>\
	<br>\
	<br>\
	<br>\
	2넴 검광의 유헬메릭<br>\
	<br>\
	어그로를 잘 잡으며 장판을 잘 피하면서 딜하면 된다<br>\
	<br>\
	<br>\
	<br>\
	3넴 오피니쿠스<br>\
	<br>\
	'감금의 소용돌이' 라는 스킬 사용시 중앙을 기준으로 주변의 잔해 뒤로 숨어야 한다.<br>\
	<br>\
	기술 사용 전 잔해물에 데미지가 들어가면 부서지기도 하니 주의<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"솜 알" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 라스코브니그<br>\
	<br>\
	보스를 집중해서 딜한다<br>\
	<br>\
	<br>\
	<br>\
	2넴 마이스<br>\
	<br>\
	중간에 세마리 슬라임이 나오는데, 이를 먹어치우러 달려간다. 이때 먹은 슬라임에 따라 효과가 달라지는데<br>\
	<br>\
	되도록이면 초록색 슬라임만 못먹게 죽여주면 된다.<br>\
	<br>\
	빨간 젤리의 공격은 같이 맞고, 파란 젤리의 공격은 따로 맞아주면 된다.<br>\
	<br>\
	<br>\
	<br>\
	3넴 티오만<br>\
	<br>\
	딜링을 하다 보면 티오만의 양쪽 날개에 데미지를 줄 수 있게 되는데, 이때 양쪽 날개부터 잡아주어야 한다.<br>\
	<br>\
	머리 위에 초록색 징표가 나타나면 곧 운석이 떨어지므로 최대한 외곽에 떨어트려주자<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"용의 둥지" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 랑다<br>\
	<br>\
	랜덤 대상자 한명이 '번개 축전' 기술 캐스팅 이후 선으로 연결되는데, 이를 외곽에 있는 탑과 연결시켜 주어야 한다.<br>\
	<br>\
	딜을 할땐 '낙뢰'라는 기술 때문에 되도록이면 가까이 붙어서 딜해주도록 하자. (자신의 주변 제외 범위데미지)<br>\
	<br>\
	<br>\
	<br>\
	2넴 그야스크투스<br>\
	<br>\
	독안개에 맞지 않도록 주의하면서 딜한다.<br>\
	<br>\
	중간에 겨자구름이라는 쫄이 나오는데 이것이 독안개를 먹어 제거해주는 대신, 점점 강해진다.<br>\
	<br>\
	자리가 독안개때문에 많이 좁아졌다 싶으면 두세개정도 먹인 후 제거해준다.<br>\
	<br>\
	<br>\
	<br>\
	3넴 니드호그<br>\
	<br>\
	에스티니앙이 죽으면 실패하니 주의, 최대한 에스티니앙에게서 멀리 떨어져서 어그로를 잡는다.<br>\
	<br>\
	중간에 랜덤대상에게 징이 찍히고 칠흙빛 구슬에 갖히게 되는데 그냥 두면 즉사하므로 반드시 부숴주자<br>\
	<br>\
	니드호그가 하늘로 올라가고, 곧이어 쫄들이 나오는데 모두 잡으면 니드호그가 즉사기를 시전한다.<br>\
	<br>\
	이때 에스티니앙이 보호막을 치므로 바로 들어가야 한다.<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"이슈가르드 교황청" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 미검의 아델펠<br>\
	<br>\
	기본적으론 쫄을 제거하면서 딜링을 하다가<br>\
	<br>\
	나중에 구슬을 까는 패턴이 나오는데, 제일 처음 나온 구슬을 기억해놨다가 그게 터지면 그쪽으로 가면 된다.<br>\
	<br>\
	장판에 주의한다<br>\
	<br>\
	<br>\
	<br>\
	2넴 전쟁광 그리노<br>\
	<br>\
	탱커는 무조건 그리노를 중앙에 주차한다<br>\
	<br>\
	딜링을 하다 보면 맵 외곽에 차원의 균열이 라는것이 생기는데 피해량 증가 디버프가 걸리니 절대 가까이 가지 않도록 한다<br>\
	<br>\
	'굳건한 신앙'이라는 파티원 전체를 밀치는 공격을 하는데, 이 때 등 뒤에 차원의 균열이 있으면 디버프가 걸리니<br>\
	<br>\
	없는 쪽으로 서서 맞도록 한다.<br>\
	<br>\
	'차원 균열' 이라는 보라색 장판을 깐다면, 피하기 쉬운 위치라면 그대로 두고, 아니라면 반드시 탱커가 밟아서 없앤다.<br>\
	<br>\
	밟으면 큰 데미지가 들어오니 주의<br>\
	<br>\
	<br>\
	<br>\
	3넴 성기사 샤리베르<br>\
	<br>\
	일단 장판을 잘 피하면서 딜한다<br>\
	<br>\
	카른 어려움 막넴이 쓰던 미라처럼 병사들이 걸어오는 패턴이 있는데 주의한다<br>\
	<br>\
	중간에 파티원끼리 사슬이 연결되는 경우가 있는데, 서로 멀리 떨어지면 끊긴다<br>\
	<br>\
	샤리베르의 피가 50%가 되면 맵에 '성화'를 까는데 장판을 잘 피하면서 성화를 모두 제거해준다<br>\
	<br>\
	탱 딜 힐 모두가 성화를 부숴주어야 한다.<br>\
	<br>\
	이후론 비슷하므로 장판을 잘 피하면서 딜해주자.<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"구브라 환상도서관" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 악마의 서<br>\
	<br>\
	장판을 잘 피하면서 딜하다가, 악마의 서가 마력을 모으기 시작한다는 문구가 나오면 책 뒤로 가야한다. 아니면 전멸<br>\
	<br>\
	중간에 겨울의 명언이라는 기술로 바닥을 미끄럽게 만들고 동시에 마력을 모으는데, 잘 미끄러져서 반대로 넘어가야 한다.<br>\
	<br>\
	<br>\
	<br>\
	2넴 비블로스<br>\
	<br>\
	비블로스가 돌진을 하면 최대한 가까이 가주는것이 좋다.<br>\
	<br>\
	중간에 비블로스가 무적이 되고, 쫄이 나오는데 쫄을 잡으면 '기름 구체' 라는 것이 나온다.<br>\
	<br>\
	이를 비블로스에게 끌고 가서 비비면 비블로스의 무적이 풀린다.<br>\
	<br>\
	단 주변에 있는 녹색 구름에 기름 구체가 닿으면 구체가 사라지므로 잘 피해서 비블로스에게 비벼준다<br>\
	<br>\
	<br>\
	<br>\
	3넴 비블리오타프<br>\
	<br>\
	중간에 머리 위에 징이 생기는데, 잠시후 구체가 생성되며 주변에 피해량 증가 디버프와 데미지를 준다<br>\
	<br>\
	원형 발판들의 사이에 설치해주도록 하자<br>\
	<br>\
	또한 갑자기 긴 캐스팅을 하며 주변의 발판에 불이 들어오는데, 발판에 들어온 불의 숫자만큼 사람이 들어가면<br>\
	<br>\
	발판의 불이 꺼진다. 모든 발판을 끄지 않으면 쫄이 나오는데, 만약 실패하더라도 쫄을 잡고 보스를 딜하면 된다<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	LV 60 던전<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"마과학 연구소" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 레굴라 반 하이드러스<br>\
	<br>\
	장판을 잘 피하면서 딜해주도록 한다.<br>\
	<br>\
	<br>\
	<br>\
	2넴 하르마키스<br>\
	<br>\
	여러가지 태세로 변신하는데 태세마다 패턴이 다르다<br>\
	<br>\
	스핑크스 태세, 코브라 태세 : 별로 주의할 점이 없다. 장판을 잘 피하면서 딜해주자<br>\
	<br>\
	라미아 태세 : 석화 공격을 하는데 이때 뒤로 돌아보아야 한다. 조심하자<br>\
	<br>\
	아바타 태세 : 탱 제외의 파티원 한명에게 속박을 걸고 그 자리에 작은 원이 생기는데<br>\
	<br>\
	이 원 안에 무조건 2명의 사람이 들어가 있어야 한다. 3명 이상이거나 한명만 있으면 큰 데미지를 입는다<br>\
	<br>\
	'기화 폭탄'이라는 기술을 쓰면 탱 제외 한명의 파티원에게 빨간 광선을 쏘는데,<br>\
	<br>\
	데미지가 분산되므로 모두 같이 맞아야 한다.<br>\
	<br>\
	<br>\
	<br>\
	3넴 ??? & ??? (스포방지)<br>\
	<br>\
	장판을 잘 피하면서 딜한다<br>\
	<br>\
	<br>\
	<br>\
	4넴 ??? ??? (스포방지)<br>\
	<br>\
	눈보라의 구체와 화염 구체 라는것이 생성되는데, 눈보라를 먼저 부수고 화염을 부순다.<br>\
	<br>\
	만약 보스에게 흡수되면 큰 데미지가 들어온다<br>\
	<br>\
	중간에 악마의 서가 쓰던 미끄러운 바닥을 쓰는데, 잘 미끄러져서 장판을 피하도록 한다<br>\
	<br>\
	'법칙 변조' 라는 기술을 쓸 경우 캐스팅 완료가 되기 직전, 블랙홀 속에 들어가야 한다.<br>\
	<br>\
	난파선의 섬의 2넴 쇼름을 생각하면 쉽다<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"거두지 않는 섬" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 누녜눙크<br>\
	<br>\
	딜링을 하다 보면 안개가 끼면서 보스가 사라지는데, 이때 방을 뒤져 누녜눙크의 그림자를 찾아 잡아야 한다<br>\
	<br>\
	처치하면 다시 누녜눙크가 등장한다.<br>\
	<br>\
	<br>\
	<br>\
	2넴 카누바누<br>\
	<br>\
	딜링을 하다보면 카누바누가 캐스팅을 하고, 장판이 생기면서 '우상'이 떨어지는데<br>\
	<br>\
	구리종광산(어려움)에서 폭탄을 옮긴것처럼 우상을 주워서 장판 밖으로 치워야 한다.<br>\
	<br>\
	만약 우상이 장판 안에 있으면 그대로 쫄로 변하니 주의<br>\
	<br>\
	<br>\
	<br>\
	3넴 와우케온<br>\
	<br>\
	낙사가 있으니 주의할 것<br>\
	<br>\
	딜을 하다보면 '신역의 선풍' 이라는 쫄이 나오고, 와우케온이 모든 공격을 회피하는데<br>\
	<br>\
	이때 신역의 선풍을 모두 제거해주어야 한다<br>\
	<br>\
	신역의 선풍을 모두 제거하면 와우케온이 넉백기를 시전하므로<br>\
	<br>\
	바로 와우케온에게 가까이 가주어야 낙사를 하지 않는다.<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"무한연속 박물함" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 환영 광선<br>\
	<br>\
	큰 장판과 작은 장판이 연달아 나와 정신이 없을수 있지만 침착하게 피하면서 딜링하면 된다<br>\
	<br>\
	<br>\
	<br>\
	2넴 미노타우로스<br>\
	<br>\
	기본적인것은 동전 애호가랑 비슷하다, 111톤 휘두르기와 후려치기를 주의하자<br>\
	<br>\
	보스가 3번 돌진 후, 베기를 사용하는데 옆이나 뒤로 피해준다<br>\
	<br>\
	보스가 '1111톤즈 휘두르기'라는 긴 캐스팅을 하면옆의 시험관에 있는 쫄의 구속을 해제해준다<br>\
	<br>\
	그리고 '사육제'라는 스킬로 쫄을 잡아먹고 체력을 회복하려고 하니 바로 쫄을 잡아주자<br>\
	<br>\
	<br>\
	<br>\
	3넴 전시 책임자<br>\
	<br>\
	쫄이 나오면 무조건 쫄을 잡아주어야 한다. 그렇지 않으면 쫄의 밑바닥도 빛나는 장판으로 변한다<br>\
	<br>\
	빨갛게 레이저가 내려오며 그 자리에 지뢰가 깔리는데 반드시 밟지 않도록 주의해준다<br>\
	<br>\
	'마과학 폭탄' 이라는 디버프가 걸리면 바로 힐러가 해제해준다.<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"성 모샨 식물원" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 장미 정원<br>\
	<br>\
	보스가 캐스팅을 준비하며 입냄새를 뿜으려고 하면 보스의 뒤로 돌아간다.<br>\
	<br>\
	그 후 쫄들이 뿜는 가스도 같이 피해주며 보스의 가스를 피해 빙글빙글 돌면서 딜링을 해주면 된다.<br>\
	<br>\
	탱커에게 큰 데미지를 주는 기술을 지속적으로 사용하니 주의<br>\
	<br>\
	<br>\
	<br>\
	2넴 여왕벌매<br>\
	<br>\
	'방어명령'을 내려 쫄들이 뜨면 쫄부터 제거해준다<br>\
	<br>\
	'공격명령'은 장판을 잘 피해주도록 하자.<br>\
	<br>\
	'연계지시'가 뜰 경우 벌들이 모이고, 한번에 벌침을 엄청나게 쏘니 주의 할 것.<br>\
	<br>\
	바닥에 장판이 보이지 않으니 주의해서 피해준다<br>\
	<br>\
	<br>\
	<br>\
	3넴 벨라돈나<br>\
	<br>\
	기본적으로 쫄이 뿜는 장판을 잘 피해야 한다<br>\
	<br>\
	벨라돈나가 주기적으로 '매혹'이라는 기술을 쓰므로 그때마다 뒤로 돌아서주자<br>\
	<br>\
	걸리면 벨라돈나에게 다가가게 된다.<br>\
	<br>\
	탱커에게 큰 데미지를 주는 기술을 지속적으로 사용하니 주의<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"시리우스 대등대(어려움)" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 발광 고라호<br>\
	<br>\
	잡다보면 파티원 또는 자신의 몸이 선과 연결되는데, 이를 주변의 동물과 연결시켜준다<br>\
	<br>\
	새는 쫄몹으로 변하며, 거미는 터져서 장판이 된다<br>\
	<br>\
	<br>\
	<br>\
	2넴 제08단 단장 베 그<br>\
	<br>\
	보스가 내려치는 곳에 구멍이 나고, 그곳에서 가스가 샌다.<br>\
	<br>\
	딜러진은 슬라임 쫄몹을 쳐서 유인하여 구멍 위에서 잡아주어야 한다.<br>\
	<br>\
	공격하다보면 엔진 두개가 나오는데, 잠시후 보스와 연결된다. 이때 보스를 때리면 마비에 걸리므로<br>\
	<br>\
	엔진을 먼저 부숴주고 보스를 공격하자<br>\
	<br>\
	<br>\
	<br>\
	3넴 엄마 봄&아빠 봄<br>\
	<br>\
	엄마 봄을 죽이면 아빠 봄이 등장한다.<br>\
	<br>\
	본체의 패턴은 별 것 없지만, 아빠 봄 때 고통의 봄/치유의 봄이 등장하는데, 이때 치유의 봄이 고통의 봄에 닿기 전에<br>\
	<br>\
	고통의 봄을 빨리 제거해주어야 한다. 그렇지 않으면 큰 데미지가 들어오니 주의.<br>\
	<br>\
	딜이 부족하다면 리미트기를 고통의 봄에 사용하는것도 방법이다.<br>\
	<br>\
	치유의 봄은 때리면 밀려나므로 치유의 봄을 때려서 계속 밀어내면서 고통의 봄을 딜하는 방법도 있다.<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"거꾸로 선 탑" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 가수왕 즈로 록고<br>\
	<br>\
	화염 방사기형 패턴인 노래부르기가 있는데, 탱커는 이 패턴을 주의하면서 방향을 잡아준다.<br>\
	<br>\
	중간에 쫄이 나오고 파티원중 랜덤 두명이 개구리로 변하는데, 계속해서 밑에 장판이 깔리니 외곽에 깔아주자.<br>\
	<br>\
	탱커에게 망치라고 해서 스턴 패턴이 뜨는데, 스턴 시간이 기니 조심하자.<br>\
	<br>\
	<br>\
	<br>\
	2넴 휘돌이<br>\
	<br>\
	탱커는 휘돌이가 계속 범위 패턴을 사용하므로 구석에 주차해주면 좋다<br>\
	<br>\
	세 개의 운석 또는 네 개의 운석이 깔리는 패턴을 쓰는데, 딜러들은 운석을 빨리 부수어 주어야 한다.<br>\
	<br>\
	운석은 부서지면 그 자리에 남게 되는데, 잠시 후 보스와 랜덤 한명이 선이 연결되며 록온된다<br>\
	<br>\
	이 때 운석 뒤로 가서 기술을 막아야 하며, 막는 데 사용한 운석은 부서지므로 즉시 다른 운석으로 가야한다<br>\
	<br>\
	기술을 맞으면 '받는 피해 증가' 디버프가 걸리므로 조심하자.<br>\
	<br>\
	<br>\
	<br>\
	3넴 칼카브리나<br>\
	<br>\
	시작할 때 칼카와 브리나들이 잔뜩 퍼져있는데, 장판을 피해 모두 잡아주면 합쳐지며 보스전이 시작된다.<br>\
	<br>\
	탱커에게 '녹아웃'이라는 강한 탱크버스터 기술을 시전하는데 이때 생존기를 돌려주거나 힐러가 힐업을 해주자.<br>\
	<br>\
	방어 자세라고 하여 극 라바나의 방어 태세와 비슷한 기술을 시전하는데, 이 때 방향을 잘 보고 공격해주자<br>\
	<br>\
	중간에 랜덤 파티원의 머리 위에 눈 모양 징이 생기면서 시선이라는 기술을 사용하면<br>\
	<br>\
	뒤로 돌아서 잘 피해주어야 하는데, 맞으면 혼란에 걸려 파티원을 공격하므로 주의하자<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"암다포르 시가지(어려움)" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 아카모트<br>\
	<br>\
	범위형 기술을 계속 사용하니 구석에서 탱킹을 하면 좋다<br>\
	<br>\
	현혹의 시선 이라는 기술을 사용하면 캐스팅을 시작하는데, 캐스팅이 끝날 때 자기가 서있던 자리에<br>\
	<br>\
	보고있던 방향으로 범위 공격을 하는 나비 날개를 단 분신이 생성되는데, 넓은 장판 공격을 하므로<br>\
	<br>\
	파티원이 피해를 보지 않게 고개를 잘 돌려주자.<br>\
	<br>\
	<br>\
	<br>\
	2넴 날개사자<br>\
	<br>\
	딜을 하다 보면 보스가 위로 올라가고, 가운데 구체가 생기는데 구체를 먼저 부숴주자<br>\
	<br>\
	중간에 바람 또는 땅 속성 데미지를 주는 구슬이 생성되는데,<br>\
	<br>\
	자신에게 바람, 또는 땅 저항 감소 디버프가 생겨있는 것을 보고 디버프와 반대 속성의 구슬을 처리해주어야 한다<br>\
	<br>\
	만일 처리가 안될경우 전체 데미지가 들어온다.<br>\
	<br>\
	<br>\
	<br>\
	3넴 쿠리부<br>\
	<br>\
	보스가 2번 죽었다 살아나므로 3번 죽여야 하는 보스이다.<br>\
	처음엔 백마법을 사용해 자신의 피를 채우지만, 두번째부턴 역전 이라는 버프가 생기며 힐 기술이 데미지로 들어온다.<br>\
	보스가 사용하는 장판을 잘 피하며 딜을 하고, 하얀색 마법진이 생기는 기술을 사용하면 안으로 들어가자<br>\
	안으로 들어온 파티원 수 만큼 데미지가 많이 경감된다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"소르카이" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 장로 모그린<br>\
	<br>\
	장판을 피하며 딜하다가 쫄이 뜨면 선이 연결된 쫄부터 잡아주자<br>\
	<br>\
	잠시 후 보라색 장판이 깔리며 쫄 시체를 떄릴 수 있게 되는데<br>\
	<br>\
	때려서 밀어주도록 하자, 장판이 끝날 때 쫄 시체가 위에 있으면 다시 살아난다.<br>\
	<br>\
	<br>\
	<br>\
	2넴 포퀴라지<br>\
	<br>\
	중간에 날아오른 뒤 착지하며 거리비례 데미지를 주고, 습보 라는 기술을 사용하며 전체에 장판이 깔리는데<br>\
	<br>\
	벽에 딱 붙어서 맞아주도록 하자. 만일 이전에 '퀘이사'라는 기술때문에 벽이 부서졌다면 부서진 벽 쪽으론 가지 말도록 하자.<br>\
	<br>\
	보라색 징이 생기면 번개구름이 생기므로 파티원들이 있는 곳과 멀리 떨어져 깔도록 하자.<br>\
	<br>\
	만일 벽에 번개가 닿을 시 벽이 부서지니 주의.<br>\
	<br>\
	<br>\
	<br>\
	3넴 흐레스벨그<br>\
	<br>\
	후측이 없으니 맘놓고 공격하자.<br>\
	브레스 패턴때 범위 안에 들어있는 발판은 사라지니 잘 이동하면서 피하도록 하며<br>\
	쫄을 잘 제거해주면서 딜을 하도록 하자.<br>\
	성스러운 정령 이라는 쫄은 잡을 시 리미트 게이지를 많이 주니 특히 잘 잡아주도록 한다.<br>\
	<br>\
	<br>\
	<br>\
	"},
	"난파선의 섬(어려움)" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 홍혈성녀단<br>\
	<br>\
	전투 커얼은 최우선으로 제거하며, 장판을 잘 피하면서 쫄을 제거해주자<br>\
	<br>\
	갑판원과 포수는 탱이 어그로를 잡는것이 좋지만 너무 연연할 필요는 없다.<br>\
	<br>\
	<br>\
	<br>\
	2넴 위미르<br>\
	<br>\
	탱커 이외 무작위 대상 두명을 연결하는 패턴은 둘이 멀리 떨어지면 끊어진다.<br>\
	<br>\
	전면동결로 바닥을 얼리면 극시바의 패턴처럼 미끄러져 움직이게 되니 위치선정에 주의하자<br>\
	<br>\
	1만 볼트라는 기술은 캐스팅 전 점액 장판 위에 올라가 행동불능 10초 디버프를 받으면 데미지가 들어오지 않는다.<br>\
	<br>\
	얼음 덩어리는 외곽에 깔아주도록 하자.<br>\
	<br>\
	<br>\
	<br>\
	3넴 에인차 슬라퓌어진<br>\
	<br>\
	중간에 화약통이 나오면 공격하여 밀어내도록 한다.<br>\
	<br>\
	독이 걸리고 잠시후 상자에 해독약을 넣는데 몸으로 부딪혀서 해독약을 찾아내면 독이 풀린다.<br>\
	<br>\
	이외에는 장판을 주의하며 딜하도록 한다.<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"젤 파톨" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 비천의 누잘 후엘록<br>\
	<br>\
	중간에 쫄들이 등장하며 보스가 하늘 높이 올라가는데<br>\
	<br>\
	풍선 포탑을 잡으면 잠시 후 공중으로 붕 뜨니 보스 밑에 있다가 공중으로 붕 떠서 몸으로 부딪히게되면<br>\
	<br>\
	보스가 공중에서 내려오게 된다. 이후 계속 딜해서 잡으면 된다.<br>\
	<br>\
	<br>\
	<br>\
	2넴 선풍의 도톨리 실록<br>\
	<br>\
	파초선같이 커다란 부채를 든 보스이다.<br>\
	<br>\
	중간에 밀어내는 패턴 때 맵에 4방향으로 존재하는 벽쪽으로 밀리도록 하자<br>\
	<br>\
	아니면 가시를 밟게 된다.<br>\
	<br>\
	<br>\
	<br>\
	3넴 청풍의 토졸 후아토톨<br>\
	<br>\
	​보스가 중간에 소환하는 가루다의 패턴을 조심하자<br>\
	<br>\
	생각보다 범위가 넓은 공격이 한꺼번에 오기 때문에 잘못하면 맞을 수도 있다.<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"구브라 환상도서관(어려움)" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 고서의 악마<br>\
	<br>\
	여태까지 많이 본 류의 장판 공격이 온다. 검은 장판은 넉백을 시키니 조심해서 피하자.<br>\
	<br>\
	연속적으로 오는 책 장판을 주의하며 딜링을 하면 된다.<br>\
	<br>\
	<br>\
	<br>\
	2넴 액체 불꽃<br>\
	<br>\
	인간 형태일때는 장판을 잘 피하면서 그냥 딜하면 된다. 보라색 줄로 연결되는 기믹은 멀리 도망가면 데미지를 약하게 받는다.<br>\
	<br>\
	회오리 형태일 때에는 회오리 형태의 극성을 파악한 뒤, 다른 극성이면 멀리 떨어지고 같은 극성이면 붙으면 된다.<br>\
	<br>\
	손 형태일 때에는 머리 위에 뜬 코인과 같은 모양의 바닥으로 가서 기술을 처리하면 된다.<br>\
	<br>\
	<br>\
	<br>\
	3넴 스트릭스<br>\
	<br>\
	'퀘이가' 의 경우 하얀 장판 위에 올라가 공중으로 붕 떠서 처리를 하면 되고<br>\
	<br>\
	'토네이도'의 경우 검은 장판 위에 올라가 과중력으로 무겁게 되어 처리를 하면 된다.<br>\
	<br>\
	'물요정'의 경우 물요정으로 변신 된 사람이 웅덩이 모양의 장판으로 들어가면 물요정이 풀린다<br>\
	<br>\
	번개는 다른 이와 같이 맞지 않도록만 주의한다.<br>\
	<br>\
	마지막으로 베히모스가 소환될 경우 큰 운석과 작은 운석이 떨어지는데<br>\
	<br>\
	큰 운석 뒤에 숨어 메테오를 피해주면 된다.<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"바일사르 장성" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	*1넴까지 가는 길에서 몹을 몰 때, 궁술사부터 점사해서 제거 해 주도록 한다<br>\
	<br>\
	마도 스카이워커 또한 무작위로 연결된 파티원에게 공격하기에 제거 해 준다<br>\
	<br>\
	<br>\
	<br>\
	1넴 마도 프레데터<br>\
	<br>\
	장판과 딜러 머리 위 징 표시 이후 쏘는 미사일을 주의한다<br>\
	<br>\
	마도 스카이워커가 중간에 소환되는 데, 팝업시 먼저 잡아준다<br>\
	<br>\
	<br>\
	<br>\
	2넴 무장 병기<br>\
	<br>\
	장판들을 잘 피해주면서 딜하자<br>\
	<br>\
	중간에 '동작 감지 교란' 이라는 기술이 나오면 모든 동작을 멈추고 가만히 있어준다 (esc)<br>\
	<br>\
	비트 사출 시에도 당황하지 말고 장판을 잘 피해주자<br>\
	<br>\
	<br>\
	<br>\
	3넴 ??? (스포방지)<br>\
	<br>\
	기본적으로는 장판을 잘 피하면서 딜하면 된다<br>\
	<br>\
	플래시 파우더 라는 기술이 나오면 보스와 반대 방향으로 고개를 돌려주자<br>\
	<br>\
	사자 머리 라는 기술과 함께 맵에 검이 깔리면, 가운데의 칼 하나만 집중공격하여 부수어 안전지대를 만들자<br>\
	<br>\
	쇠사슬 이라는 기술이 힐러에게 연결되면 쇠사슬을 제일 먼저 부수어 힐러의 안전을 확보하자.<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"솜 알(어려움)" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 레이튼워드<br>\
	<br>\
	특별히 어려운 것은 없으나, 중간에 포자 주머니 소환 패턴에서 소환한 포자 주머니 중<br>\
	<br>\
	큰 것은 거리에 따라 데미지를 주므로 멀리 떨어진다<br>\
	<br>\
	<br>\
	<br>\
	2넴 가우로우<br>\
	<br>\
	캐스팅 바가 없으며 시전 모션을 보고 대처해야 한다<br>\
	<br>\
	특별히 주의할 점을 꼽아보면, 맹렬한 포효 이후의 꼬리 휘두르기는 후방 공격이 아닌 전방위 공격이며<br>\
	<br>\
	탱커는 팔을 휘두르는 모션을 주의하자<br>\
	<br>\
	<br>\
	<br>\
	3넴 용암 전갈<br>\
	<br>\
	점점 용암 장판이 깔려 장소가 협소해진다 빠르게 딜을 하자<br>\
	<br>\
	탱커는 탱커버스터인 '죽음의 꼬리'를 주의한다<br>\
	<br>\
	쫄 소환시 캐스팅을 하면 용암 장판을 까는 '발톱 전갈'을 먼저 집중공격하자<br>\
	<br>\
	파멸 영역은 넉백이 있으므로 주의한다<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	LV 61-69 던전<br>\
	<br>\
	<br>\
	"},
	"세이렌 해" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 루카트<br>\
	<br>\
	이 네임드는 모두 뭉쳐서 행동하는 것이 좋다<br>\
	<br>\
	가운데로 모여서 맞으라는 물 탄환 기믹이 있다<br>\
	<br>\
	화살표 이펙트가 뜨면 그곳으로 모여주자<br>\
	<br>\
	넉백이 조금 귀찮으며 특별히 어려운 것은 없다<br>\
	<br>\
	<br>\
	<br>\
	2넴 간수장<br>\
	<br>\
	장판과 '밤의 서막' 이라는 끌어당기는 기믹을 주의하면 크게 어렵지 않다<br>\
	<br>\
	그림자 죄수들이 깔리면 당황하지 말고 장판을 잘 피해주자<br>\
	<br>\
	<br>\
	<br>\
	3넴 로렐라이<br>\
	<br>\
	다른 기믹은 크게 까다롭지 않지만 '죽음의 전진/후진'이라는 기술이 까다롭다<br>\
	<br>\
	플레이어가 보는 방향으로 2초간 전진 혹은 반대로 돌아 후진을 하므로<br>\
	<br>\
	해당 기믹에 맞추어 위치 선정을 잘 해주자<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"시스이 궁" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 아미키리<br>\
	<br>\
	징 기술은 범위 공격이니 징이 뜨면 산개하여 피해주자<br>\
	<br>\
	동시에 보스가 무적이 되면 다리를 공격할 수 있게 되는데, 다리를 먼저 부숴주면 보스가 무력화된다<br>\
	<br>\
	<br>\
	<br>\
	2넴 홍옥 공주<br>\
	<br>\
	'유혹' 이라는 기술을 사용하면 상자를 열어 노인으로 변하여 피하자<br>\
	<br>\
	각자 상자 하나씩을 맡아 여는 것이 좋다<br>\
	<br>\
	유혹에 당하면 이어지는 '태풍차기'에 맞는다<br>\
	<br>\
	'해저 화산'이라는 기믹이 뜨면 딜러 둘은 맵 외곽을 돌면서 장판을 빼주자<br>\
	<br>\
	<br>\
	<br>\
	3넴 시스이 요비<br>\
	<br>\
	'짙은 안개' 라는 기술을 사용해 숨는다<br>\
	<br>\
	이후 나오는 쫄을 제거하면 보스가 다시 등장한다<br>\
	<br>\
	쫄이 등장하면 쫄부터 먼저 제거해준다<br>\
	<br>\
	중간에 '광기어린 시선' 패턴을 사용하면 캐스팅 완료 전에 보스 쪽을 보지 않도록 한다<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"바르담 패도" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 갈루라<br>\
	<br>\
	장판을 잘 피하면서 공격하자<br>\
	<br>\
	한명과 줄이 연결되는 기믹은 이후 돌진해오는데, 거리 반비례 데미지므로 멀리 떨어져준다<br>\
	<br>\
	<br>\
	<br>\
	2넴 바르담 조각상<br>\
	<br>\
	딜을 전혀 할 필요가 없이 기믹만 잘 피하면 되는 특이한 네임드이다<br>\
	<br>\
	경우에 따라 파티원 넷 중 하나만 들어가도 무방한 특이한 네임드<br>\
	<br>\
	마안과 기둥 안에 들어가야 하는 패턴, 마지막에 운석은 석상 뒤에서 피한다는 것을 주의하면 된다<br>\
	<br>\
	<br>\
	<br>\
	3넴 욜<br>\
	<br>\
	장판이 매우 많은 네임드이니 장판을 주의하자<br>\
	<br>\
	중간에 욜이 날아오르고 쫄을 소환하는데, 쫄을 잡고 나면 외곽에서 돌진을 하니 주의하자<br>\
	<br>\
	마지막에 솜 알의 마지막 네임드처럼 양 날개를 공격할 수 있게 되니 날개부터 공격하면 된다<br>\
	<br>\
	이외에는 마안 정도만 주의하면 된다<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"도마 성" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 마도 리어가드<br>\
	<br>\
	특별한 건 없지만 비트가 쏘는 레이저와 범위가 표시되지 않는 리어가드 폭뢰를 주의한다<br>\
	<br>\
	<br>\
	<br>\
	2넴 마도 헥사롤러<br>\
	<br>\
	특별한 건 없지만 쉐어징을 조심하고, 필드에 기둥이 설치되면 기둥 당 하나씩 사람이 들어가 주어야 한다<br>\
	<br>\
	<br>\
	<br>\
	3넴 강화 그륀바트<br>\
	<br>\
	전기톱은 해당 위치를 공격하는 것이므로 맞고 있을 필요가 없다 피해주자<br>\
	<br>\
	탱커는 챠크람이 뜨면 챠크람을 피할 수 있게 주차한다<br>\
	<br>\
	기관총은 대상자에게 계속 쏘므로 대상자는 기관총이 파티원한테 가지 않도록 주의한다<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"카스트룸 아바니아" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 마도 마그나로더<br>\
	<br>\
	특별한 건 없으나 중간에 마구 돌진하는 패턴이 있다<br>\
	<br>\
	돌진중엔 무적이니 맵에 배치된 박격포로 맞추어 돌진을 멈춰주어야 한다<br>\
	<br>\
	<br>\
	<br>\
	2넴 XXIV호<br>\
	<br>\
	기믹이 잘 이해가 안 갈 수 있으니 주의<br>\
	<br>\
	필드에 기둥이 생긴 뒤 세 가지 속성의 장판이 생기며, 이곳에 들어가면 해당 속성을 얻게 된다<br>\
	<br>\
	이후 보스가 '보호막 변환' 을 사용해 세 속성 중 하나에만 약점을 갖고, 약점이 아닌 속성을 가진 상태에서 공격하면<br>\
	<br>\
	반격 피해가 들어온다. 반드시 속성을 변환한 뒤 공격하자<br>\
	<br>\
	<br>\
	<br>\
	3넴 인페르노<br>\
	<br>\
	쫄 팝업시 쫄부터 제거해야 한다<br>\
	<br>\
	보스의 탱커버스터인 '케투 난도질'이 매우 아프며<br>\
	<br>\
	전투 중간중간 보스가 점점 강화되어 패턴이 강해지니 주의<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	LV 70 던전<br>\
	<br>\
	<br>\
	"},
	"알라미고" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 경비 전갈<br>\
	<br>\
	플레이어를 추적하는 장판이 생기고 일정 시간 후 그 자리에 불 장판이 생긴다<br>\
	<br>\
	빈 곳에 장판을 깐 뒤 딜을 하면 된다<br>\
	<br>\
	까다로우나 크게 어렵진 않다<br>\
	<br>\
	<br>\
	<br>\
	2넴 아울루스 말 아시나<br>\
	<br>\
	중간에 플레이어를 저 멀리 넉백시키고 영혼을 분리한다<br>\
	<br>\
	영혼 상태에서 자신의 원래 몸을 향해 다가가야 하는데 마도 손아귀와 레이저가 방해하니 주의할 것<br>\
	<br>\
	원래 몸에 들어간 뒤 쫄을 제거하고 다시 보스를 딜하면 된다<br>\
	<br>\
	<br>\
	<br>\
	3넴 ???<br>\
	<br>\
	3가지 패턴만 조심하면 된다<br>\
	<br>\
	뇌절 일섬: 보스 주변으로 마비장판이 생긴다. 보스에게서 떨어져주자<br>\
	<br>\
	풍단 일섬: 보스 주변으로 넉백공격을 한다. 이후 붙거나 넉백 방지기를 사용한다<br>\
	<br>\
	요도 일섬: 각 플레이어들에게 장판 공격을 한다. 산개하여 피해주자<br>\
	<br>\
	<br>\
	<br>\
	중간에 3개의 검을 맵에 꽂는 패턴이 있는데, 이 때 검을 하나씩 부숴주어야 한다<br>\
	<br>\
	이 때 검이 위의 세가지 패턴도 사용하니 주의<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	<br>\
	"},
	"쿠가네 성" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 즈이코우마루<br>\
	<br>\
	자폭하는 쫄을 소환하는데, 이것에 닿으면 이동 불가 상태가 되므로 보스와 떨어져서 처리한다<br>\
	<br>\
	이외에 특별히 주의할 것은 없다<br>\
	<br>\
	<br>\
	<br>\
	2넴 도우준마루<br>\
	<br>\
	장판을 잘 피하면서 딜해주자. 쫄을 소환하는 것 외에 특별한 것은 없다<br>\
	<br>\
	<br>\
	<br>\
	3넴 요우진보<br>\
	<br>\
	'운증용변' 이라는 패넡에서 카게야마가 뿌리는 돈을 요우진보의 개인 다이고로보다 먼저 주워야 한다<br>\
	이후 같은 패턴에서 용 머리가 추가되는 패턴이 있는데, 용 머리를 제거하면서 돈을 주워주면 된다<br>\
	<br>\
	<br>\
	<br>\
	"},
	"성도산 사원" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 커얼 슈루티<br>\
	<br>\
	잠시 후 커얼 스므르티라는 보스가 하나 더 등장하니 장판을 조심하며 잘 잡아준다<br>\
	<br>\
	<br>\
	<br>\
	2넴 아부다<br>\
	<br>\
	데미지 감소 버프가 걸리는 '간파'와 '좌우 베기/전투 베기', '고행'을 주의한다<br>\
	<br>\
	이것에 맞을 시 90%의 데미지 감소가 걸리기에 공략에 걸리는 시간이 늘어난다<br>\
	<br>\
	<br>\
	<br>\
	전투가 끝난 후 걸린 시간에 따라<br>\
	<br>\
	이끼이끼급 < 큰메뚜기급 < 가젤급 < 커얼급 < 그리폰급 < 쌍두커얼급<br>\
	<br>\
	으로 등급이 나뉘어 표시된다<br>\
	<br>\
	<br>\
	<br>\
	3넴 쌍표범 이본<br>\
	<br>\
	'영혼의 혈도 찌르기'란 기술을 맞은 대상은 피가 1이 되니 주의<br>\
	'쌍표창연격'이라는 기술을 사용하면 맵에 구체가 잔뜩 소환된다<br>\
	이것을 먹으면 다음에 오는 보스 기믹의 데미지가 감소하고, 자신의 데미지가 증가하니 꼭 먹을 것<br>\
	<br>\
	<br>\
	<br>\
	"},
	"스칼라 유적" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 켈피<br>\
	<br>\
	수력 당기기/밀치기를 할 때 장판에 닿지 않도록 주의한다<br>\
	<br>\
	<br>\
	<br>\
	2넴 옛 존재<br>\
	<br>\
	'옛 존재의 환영' 이란 것을 소환하면 빠르게 제거 해 주자<br>\
	<br>\
	이후에 플레이어들을 스프리건으로 변신시키고 분신을 소환하는데<br>\
	<br>\
	스프리건의 스킬로 분신을 제거해주면 된다<br>\
	<br>\
	<br>\
	<br>\
	3넴 입바른 흐로드릭<br>\
	<br>\
	시전 바가 보이지 않는 보스이다<br>\
	보스의 행동과 안내문구에 주의하며 기믹을 피해주자<br>\
	중간에 마안도 사용하므로 보지 않도록 주의<br>\
	<br>\
	<br>\
	<br>\
	"},
	"지옥뚜껑" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 오오타케마루<br>\
	<br>\
	익히 보았던 100톤 휘두르기 등의 기믹을 사용하니 주의<br>\
	<br>\
	받피증에 주의하며 장판을 잘 피해주자<br>\
	<br>\
	중간에 어그로를 무시하고 대상자를 따라다니면서 용암을 토하는 패턴에 주의<br>\
	<br>\
	<br>\
	<br>\
	2넴 카마이타치<br>\
	<br>\
	중간에 쫄을 소환하고 붉은 선을 따라 베기 공격을 가하는데, 붉은 선을 피해주며 쫄을 제거하면 된다<br>\
	<br>\
	<br>\
	<br>\
	3넴 현무<br>\
	<br>\
	바닥이 변화하며 바닥에 있는 화살표 방향대로, 위에 '물구슬'이 있는 장판부터 시작하여 공격이 지나간다<br>\
	이에 주의하고, 벽이 나오는 패턴에선 벽을 빨리 부숴주자<br>\
	<br>\
	<br>\
	<br>\
	"},
	"무한연속 박물함(어려움)" : {
	txt : "\
	<br>\
	<br>\
	<br>\
	1넴 마더 비트<br>\
	<br>\
	장판을 잘 피해주며 공격한다<br>\
	<br>\
	마도비트들이 장판을 까는 패턴 이후 탱커에게 오는 강한 공격을 주의한다<br>\
	<br>\
	짝수번째에 비트들이 일렬로 정렬되며 비트의 총구 방향으로 즉사 공격이 오니<br>\
	<br>\
	비트의 총구 방향 반대로 이동해준다<br>\
	<br>\
	<br>\
	<br>\
	2넴 알테마 워리어<br>\
	<br>\
	삼투신의 패턴을 그대로 사용한다<br>\
	<br>\
	삼투신의 토벌전을 해 보았다면 크게 어려울 게 없는 편이나<br>\
	<br>\
	주르반 기믹에서 오는 짝맞추어 서기,<br>\
	<br>\
	세피로트 패턴에서 오는 넓어지는 장판 깔기, (외곽에 설치하면 된다)<br>\
	<br>\
	소피아 패턴에서 오는 하얀색/검정색 고리 대상자 겹치기<br>\
	<br>\
	등을 주의한다<br>\
	<br>\
	<br>\
	<br>\
	3넴 알테마 비스트<br>\
	<br>\
	이 보스도 시전바가 없으며 행동을 보고 판단해야 한다<br>\
	앞다리를 드는 것 보스와 멀어지고, 뒷다리로 일어서는 패턴은 보스와 붙어야 한다<br>\
	전체 데미지기와, 현 피통의 50% 데미지를 주는 기술, 빛의 기둥이 올라오는 패턴 등을 주의하며<br>\
	힐업을 잘 하도록 한다<br>\
	<br>\
	"},
"임무명" : {
txt : "\
내용은 여기 쓰세요.<br>\
"},



};
