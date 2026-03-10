import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '개인정보처리방침 - AI-men',
    description: 'AI-men 서비스의 개인정보처리방침입니다.',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-navy-darker text-divine-white font-inter p-8 md:p-20">
            <div className="max-w-4xl mx-auto bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
                <h1 className="text-4xl font-black mb-10 text-gold">개인정보처리방침</h1>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. 개인정보의 수집 항목 및 방법</h2>
                        <p>AI-men은 서비스 제공을 위해 최소한의 개인정보를 수집합니다. 수집 항목에는 이름, 이메일 주소, 업로드된 영상 데이터 등이 포함될 수 있습니다.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. 개인정보의 이용 목적</h2>
                        <p>수집된 정보는 서비스 제공, 사용자 식별, 고객 지원, 서비스 개선 및 분석을 위해서만 사용됩니다.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. 구글 애드센스 사용 안내</h2>
                        <p>본 사이트는 구글에서 제공하는 웹 광고 서비스인 구글 애드센스(Google AdSense)를 사용합니다. 구글은 사용자가 본 사이트 및 다른 사이트를 방문한 데이터를 기반으로 광고를 제공하기 위해 쿠키(Cookie)를 사용합니다.</p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>사용자는 구글 광고 설정 페이지를 방문하여 맞춤설정 광고를 해제할 수 있습니다.</li>
                            <li>타사 공급업체 및 광고 네트워크에서 제공하는 쿠키 사용에 대한 자세한 정보는 각 제공업체의 사이트에서 확인하실 수 있습니다.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. 개인정보의 보유 및 파기</h2>
                        <p>이용 목적이 달성된 개인정보는 지체 없이 파기합니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. 이용자의 권리</h2>
                        <p>이용자는 언제든지 자신의 개인정보에 대한 열람, 수정, 삭제를 요청할 수 있습니다.</p>
                    </section>

                    <section>
                        <p className="text-sm text-gray-500 mt-10">시행일자: 2026년 3월 10일</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
