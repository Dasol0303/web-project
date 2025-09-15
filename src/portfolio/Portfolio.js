import './Portfolio.css';

import { useState } from "react";


function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "BioMind",
            src: process.env.PUBLIC_URL + "/video/BioMind.mp4",
            details: {
                site: "FitShare",
                people: "4명",
                period: "2025.05.28 ~ 2025.06.13",
                tech: "HTML, CSS, JavaScript, React",
                subject: "식단/운동/컨디션 기록 등을 제공하는 사용자 건강 관리 서비스 시스템",
                purpose: `
                    다이어트, 근력 증가 등의 목적으로 운동을 시작하려 했으나, 가격적인 부담과 무슨 운동을 시작해야 하는지를 모르는 사람들을 위해 기획.
                    기존 웹사이트나 앱과 달리 트레이너 매치 중심이 아닌 함께 운동할 수 있는 헬스 파트너를 찾을 수 있는 사이트.
                    헬스뿐 아니라 다양한 스포츠에도 관심 있는 사람들이 함께 운동하는 사람을 찾을 수 있음.
                    전국의 전문가들과 정보 공유 가능.
                `,
                responsibility: "스토리 보드 작성, 로그인의 전반적인 부분과 마이페이지 구현",
                github: "https://github.com/Dasol0303/BioMind"
            }
        },
        {
            id: 2,
            title: "Connectify",
            src: process.env.PUBLIC_URL + "/video/Connectify.mp4",
            details: {
                site: "Connectify",
                people: "4명",
                period: "2025.07.28 ~ 2025.08.14",
                tech: "HTML, CSS, JavaScript, OracleDB, JAVA, Spring, AJAX, Tomcat",
                subject: "공공데이터를 활용한 여행지 추천 및 여행 기록 공유 커뮤니티 서비스",
                purpose: "[모두가 누릴 수 있는 여행] 을 목표로 이동에 제약이 있는 사람들(고령자, 휠체어 사용자, 임산부 등)을 위한 편의시설 정보 중심의 여행지 추천 및 예약 커뮤니티 플랫폼입니다. 이 프로젝트는 관광지의 장애인 접근성, 교통편, 화장실, 경사로, 숙박시설 등의 정보를 수집·정리하여 사용자 맞춤형으로 제공하고, 보다 안심하고 계획할 수 있는 여행 환경을 조성해 모두가 여행의 즐거움에 연결될 수 있도록 하고자 합니다.",
                responsibility: "요구사항 분석, WBS 작성, 메인 페이지, 관리자 페이지의 전반적인 작업",
                github: "https://github.com/Dasol0303/Connectify"
            }
        },
        {
            id: 3,
            title: "BorderCollies",
            src: process.env.PUBLIC_URL + "/video/FarmBaro.mp4",
            details: {
                site: "바로목장",
                people: "4명",
                period: "2025.08.21 ~ 2025.09.12",
                tech: "HTML, CSS, JavaScript, React, OracleDB, JAVA, Spring, MyBatis, Tomcat",
                subject: "농산물 가격추이 시세 정보 분석 기반의 농산물 직거래 시스템",
                purpose: "소규모 축산 농가와 소상공인을 직접 연결하는 온라인 플랫폼을 구축하여, 복잡한 유통 구조를 축소함으로써 소상공인은 원가절감, 축산 농가는 안정적인 판로를 확보하고 유통 마진을 줄여 더 높은 수익을 창출할 수 있게 하고자 합니다.",
                responsibility: "요구사항 분석, WBS 작성, 메인 페이지, 시세, 알림 기능 작업",
                github: "https://github.com/Dasol0303/BorderCollies"
            }
        }
    ];

    const [selected, setSelected] = useState(null);

    return (
        <div className="port-container">
            <div className="header">
                <h1>진다솔's Portfolio</h1>
                <h3>휴먼 교육센터</h3>
                <p>"자바(JAVA)활용 데이터 플랫폼 구축 풀스텍 개발자 과정"</p>
                <div className="projects">
                    <span>1차 프로젝트: 프론트엔드 개발</span>
                    <span>2차 프로젝트: 백엔드 개발</span>
                    <span>3차 프로젝트: 프론트엔드 + 백엔드 개발</span>
                </div>
            </div>

            <div className="body">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="inner"
                        onClick={() => setSelected(project)}
                    >
                        <video className="video" muted>
                            <source src={project.src} type="video/mp4" />
                        </video>
                        <div>
                            <p>{project.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selected && (
                <div className="modal-overlay" onClick={() => setSelected(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selected.title}</h2>
                        <video className="modal-video" controls autoPlay>
                            <source src={selected.src} type="video/mp4" />
                        </video>

                        {/* 상세 내용 */}
                        <div className="modal-details">
                            <p><strong>사이트 명</strong> {selected.details.site}</p>
                            <p><strong>작업 인원수</strong> {selected.details.people}</p>
                            <p><strong>작업 기간</strong> {selected.details.period}</p>
                            <p><strong>기술 스택</strong> {selected.details.tech}</p>
                            <p><strong>주제</strong> {selected.details.subject}</p>
                            <p><strong>사이트 기획 목적</strong> <br /><br />{selected.details.purpose}</p>
                            <p><strong>작업한 부분</strong> {selected.details.responsibility}</p>
                            <p>
                                <strong>깃허브 주소</strong>{" "}
                                <a href={selected.details.github} target="_blank" rel="noopener noreferrer">
                                    {selected.details.github}
                                </a>
                            </p>
                        </div>

                        <button className="close-btn" onClick={() => setSelected(null)}>
                            닫기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Portfolio;