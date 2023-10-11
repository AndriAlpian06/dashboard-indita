import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

const Dashboards = () => {
  return (
    <>

        {/* Sidabar */}
        <SideBar />

        <div className="p-4 xl:ml-80">
            {/* Navbar */}
             <Navbar />
                <button
                className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-sm bg-white text-blue-gray-900 shadow-md hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
                type="button"
                >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                    >
                    <path
                        fillRule="evenodd"
                        d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </button>
                <div className="mt-12">
                <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-6 h-6 text-white"
                        >
                        <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                        <path
                            fillRule="evenodd"
                            d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                            clipRule="evenodd"
                        />
                        <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                        </svg>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        Total Data Intent
                        </p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                        300
                        </h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                        <strong className="text-green-500">+55%</strong>&nbsp;than last
                        week
                        </p>
                    </div>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-6 h-6 text-white"
                        >
                        <path
                            fillRule="evenodd"
                            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        Totak Data Keyword
                        </p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                        2,300
                        </h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                        <strong className="text-green-500">+3%</strong>&nbsp;than last
                        month
                        </p>
                    </div>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-6 h-6 text-white"
                        >
                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                        </svg>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        Total Kategori
                        </p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                        7
                        </h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                        <strong className="text-green-500">+5%</strong>&nbsp;than
                        yesterday
                        </p>
                    </div>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-6 h-6 text-white"
                        >
                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                        </svg>
                    </div>
                    <div className="p-4 text-right">
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        Total User
                        </p>
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                        7
                        </h4>
                    </div>
                    <div className="border-t border-blue-gray-50 p-4">
                        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                        <strong className="text-red-500">-2%</strong>&nbsp;than yesterday
                        </p>
                    </div>
                    </div>
                    
                </div>
                <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6">
                        <div style={{ minHeight: 235 }}>
                        <div
                            id="apexcharts54q3f6ey"
                            className="apexcharts-canvas apexcharts54q3f6ey apexcharts-theme-light"
                            style={{ width: 326, height: 220 }}
                        >
                            <svg
                            id="SvgjsSvg1328"
                            width={326}
                            height={220}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlnssvgjs="http://svgjs.dev"
                            className="apexcharts-svg"
                            xmlnsdata="ApexChartsNS"
                            transform="translate(0, 0)"
                            style={{ background: "transparent" }}
                            >
                            <g
                                id="SvgjsG1330"
                                className="apexcharts-inner apexcharts-graphical"
                                transform="translate(41.6015625, 35)"
                            >
                                <defs id="SvgjsDefs1329">
                                <linearGradient
                                    id="SvgjsLinearGradient1334"
                                    x1={0}
                                    y1={0}
                                    x2={0}
                                    y2={1}
                                >
                                    <stop
                                    id="SvgjsStop1335"
                                    stopOpacity="0.4"
                                    stopColor="rgba(216,227,240,0.4)"
                                    offset={0}
                                    />
                                    <stop
                                    id="SvgjsStop1336"
                                    stopOpacity="0.5"
                                    stopColor="rgba(190,209,230,0.5)"
                                    offset={1}
                                    />
                                    <stop
                                    id="SvgjsStop1337"
                                    stopOpacity="0.5"
                                    stopColor="rgba(190,209,230,0.5)"
                                    offset={1}
                                    />
                                </linearGradient>
                                <clipPath id="gridRectMask54q3f6ey">
                                    <rect
                                    id="SvgjsRect1339"
                                    width="268.3984375"
                                    height="145.73"
                                    x={-2}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                    />
                                </clipPath>
                                <clipPath id="forecastMask54q3f6ey" />
                                <clipPath id="nonForecastMask54q3f6ey" />
                                <clipPath id="gridRectMarkerMask54q3f6ey">
                                    <rect
                                    id="SvgjsRect1340"
                                    width="268.3984375"
                                    height="149.73"
                                    x={-2}
                                    y={-2}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                    />
                                </clipPath>
                                </defs>
                                <rect
                                id="SvgjsRect1338"
                                width="6.043392857142857"
                                height="145.73"
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                strokeDasharray={3}
                                fill="url(#SvgjsLinearGradient1334)"
                                className="apexcharts-xcrosshairs"
                                y2="145.73"
                                filter="none"
                                fillOpacity="0.9"
                                />
                                <g
                                id="SvgjsG1359"
                                className="apexcharts-xaxis"
                                transform="translate(0, 0)"
                                >
                                <g
                                    id="SvgjsG1360"
                                    className="apexcharts-xaxis-texts-g"
                                    transform="translate(0, -4)"
                                >
                                    <text
                                    id="SvgjsText1362"
                                    fontFamily="inherit"
                                    x="18.885602678571427"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1363">M</tspan>
                                    <title>M</title>
                                    </text>
                                    <text
                                    id="SvgjsText1365"
                                    fontFamily="inherit"
                                    x="56.65680803571428"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1366">T</tspan>
                                    <title>T</title>
                                    </text>
                                    <text
                                    id="SvgjsText1368"
                                    fontFamily="inherit"
                                    x="94.42801339285712"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1369">W</tspan>
                                    <title>W</title>
                                    </text>
                                    <text
                                    id="SvgjsText1371"
                                    fontFamily="inherit"
                                    x="132.19921875"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1372">T</tspan>
                                    <title>T</title>
                                    </text>
                                    <text
                                    id="SvgjsText1374"
                                    fontFamily="inherit"
                                    x="169.97042410714286"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1375">F</tspan>
                                    <title>F</title>
                                    </text>
                                    <text
                                    id="SvgjsText1377"
                                    fontFamily="inherit"
                                    x="207.74162946428572"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1378">S</tspan>
                                    <title>S</title>
                                    </text>
                                    <text
                                    id="SvgjsText1380"
                                    fontFamily="inherit"
                                    x="245.51283482142858"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1381">S</tspan>
                                    <title>S</title>
                                    </text>
                                </g>
                                </g>
                                <g id="SvgjsG1402" className="apexcharts-grid">
                                <g
                                    id="SvgjsG1403"
                                    className="apexcharts-gridlines-horizontal"
                                >
                                    <line
                                    id="SvgjsLine1413"
                                    x1={0}
                                    y1={0}
                                    x2="264.3984375"
                                    y2={0}
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1414"
                                    x1={0}
                                    y1="29.145999999999997"
                                    x2="264.3984375"
                                    y2="29.145999999999997"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1415"
                                    x1={0}
                                    y1="58.291999999999994"
                                    x2="264.3984375"
                                    y2="58.291999999999994"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1416"
                                    x1={0}
                                    y1="87.43799999999999"
                                    x2="264.3984375"
                                    y2="87.43799999999999"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1417"
                                    x1={0}
                                    y1="116.58399999999999"
                                    x2="264.3984375"
                                    y2="116.58399999999999"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1418"
                                    x1={0}
                                    y1="145.73"
                                    x2="264.3984375"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                </g>
                                <g
                                    id="SvgjsG1404"
                                    className="apexcharts-gridlines-vertical"
                                >
                                    <line
                                    id="SvgjsLine1405"
                                    x1={0}
                                    y1={0}
                                    x2={0}
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1406"
                                    x1="37.771205357142854"
                                    y1={0}
                                    x2="37.771205357142854"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1407"
                                    x1="75.54241071428571"
                                    y1={0}
                                    x2="75.54241071428571"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1408"
                                    x1="113.31361607142856"
                                    y1={0}
                                    x2="113.31361607142856"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1409"
                                    x1="151.08482142857142"
                                    y1={0}
                                    x2="151.08482142857142"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1410"
                                    x1="188.85602678571428"
                                    y1={0}
                                    x2="188.85602678571428"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1411"
                                    x1="226.62723214285714"
                                    y1={0}
                                    x2="226.62723214285714"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1412"
                                    x1="264.3984375"
                                    y1={0}
                                    x2="264.3984375"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                </g>
                                <line
                                    id="SvgjsLine1420"
                                    x1={0}
                                    y1="145.73"
                                    x2="264.3984375"
                                    y2="145.73"
                                    stroke="transparent"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                />
                                <line
                                    id="SvgjsLine1419"
                                    x1={0}
                                    y1={1}
                                    x2={0}
                                    y2="145.73"
                                    stroke="transparent"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                />
                                </g>
                                <g
                                id="SvgjsG1341"
                                className="apexcharts-bar-series apexcharts-plot-series"
                                >
                                <g
                                    id="SvgjsG1342"
                                    className="apexcharts-series"
                                    rel={1}
                                    seriesname="Views"
                                    datarealindex={0}
                                >
                                    <path
                                    id="SvgjsPath1346"
                                    d="M 15.86390625 145.73L 15.86390625 5Q 15.86390625 0 20.86390625 0L 16.907299107142855 0Q 21.907299107142855 0 21.907299107142855 5L 21.907299107142855 5L 21.907299107142855 145.73L 21.907299107142855 145.73z"
                                    fill="rgba(255,255,255,0.8)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMask54q3f6ey)"
                                    pathto="M 15.86390625 145.73L 15.86390625 5Q 15.86390625 0 20.86390625 0L 16.907299107142855 0Q 21.907299107142855 0 21.907299107142855 5L 21.907299107142855 5L 21.907299107142855 145.73L 21.907299107142855 145.73z"
                                    pathfrom="M 15.86390625 145.73L 15.86390625 145.73L 21.907299107142855 145.73L 21.907299107142855 145.73L 21.907299107142855 145.73L 21.907299107142855 145.73L 21.907299107142855 145.73L 15.86390625 145.73"
                                    cy={0}
                                    cx="53.63511160714285"
                                    j={0}
                                    val={50}
                                    barheight="145.73"
                                    barwidth="6.043392857142857"
                                    selected={true}
                                    filter="url(#SvgjsText1385)"
                                    />
                                    <path
                                    id="SvgjsPath1348"
                                    d="M 53.63511160714285 145.73L 53.63511160714285 92.43799999999999Q 53.63511160714285 87.43799999999999 58.63511160714285 87.43799999999999L 54.67850446428571 87.43799999999999Q 59.67850446428571 87.43799999999999 59.67850446428571 92.43799999999999L 59.67850446428571 92.43799999999999L 59.67850446428571 145.73L 59.67850446428571 145.73z"
                                    fill="rgba(255,255,255,0.8)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMask54q3f6ey)"
                                    pathto="M 53.63511160714285 145.73L 53.63511160714285 92.43799999999999Q 53.63511160714285 87.43799999999999 58.63511160714285 87.43799999999999L 54.67850446428571 87.43799999999999Q 59.67850446428571 87.43799999999999 59.67850446428571 92.43799999999999L 59.67850446428571 92.43799999999999L 59.67850446428571 145.73L 59.67850446428571 145.73z"
                                    pathfrom="M 53.63511160714285 145.73L 53.63511160714285 145.73L 59.67850446428571 145.73L 59.67850446428571 145.73L 59.67850446428571 145.73L 59.67850446428571 145.73L 59.67850446428571 145.73L 53.63511160714285 145.73"
                                    cy="87.43799999999999"
                                    cx="91.40631696428571"
                                    j={1}
                                    val={20}
                                    barheight="58.291999999999994"
                                    barwidth="6.043392857142857"
                                    />
                                    <path
                                    id="SvgjsPath1350"
                                    d="M 91.40631696428571 145.73L 91.40631696428571 121.58399999999999Q 91.40631696428571 116.58399999999999 96.40631696428571 116.58399999999999L 92.44970982142857 116.58399999999999Q 97.44970982142857 116.58399999999999 97.44970982142857 121.58399999999999L 97.44970982142857 121.58399999999999L 97.44970982142857 145.73L 97.44970982142857 145.73z"
                                    fill="rgba(255,255,255,0.8)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMask54q3f6ey)"
                                    pathto="M 91.40631696428571 145.73L 91.40631696428571 121.58399999999999Q 91.40631696428571 116.58399999999999 96.40631696428571 116.58399999999999L 92.44970982142857 116.58399999999999Q 97.44970982142857 116.58399999999999 97.44970982142857 121.58399999999999L 97.44970982142857 121.58399999999999L 97.44970982142857 145.73L 97.44970982142857 145.73z"
                                    pathfrom="M 91.40631696428571 145.73L 91.40631696428571 145.73L 97.44970982142857 145.73L 97.44970982142857 145.73L 97.44970982142857 145.73L 97.44970982142857 145.73L 97.44970982142857 145.73L 91.40631696428571 145.73"
                                    cy="116.58399999999999"
                                    cx="129.17752232142857"
                                    j={2}
                                    val={10}
                                    barheight="29.145999999999997"
                                    barwidth="6.043392857142857"
                                    />
                                    <path
                                    id="SvgjsPath1352"
                                    d="M 129.17752232142857 145.73L 129.17752232142857 86.6088Q 129.17752232142857 81.6088 134.17752232142857 81.6088L 130.22091517857143 81.6088Q 135.22091517857143 81.6088 135.22091517857143 86.6088L 135.22091517857143 86.6088L 135.22091517857143 145.73L 135.22091517857143 145.73z"
                                    fill="rgba(255,255,255,0.8)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMask54q3f6ey)"
                                    pathto="M 129.17752232142857 145.73L 129.17752232142857 86.6088Q 129.17752232142857 81.6088 134.17752232142857 81.6088L 130.22091517857143 81.6088Q 135.22091517857143 81.6088 135.22091517857143 86.6088L 135.22091517857143 86.6088L 135.22091517857143 145.73L 135.22091517857143 145.73z"
                                    pathfrom="M 129.17752232142857 145.73L 129.17752232142857 145.73L 135.22091517857143 145.73L 135.22091517857143 145.73L 135.22091517857143 145.73L 135.22091517857143 145.73L 135.22091517857143 145.73L 129.17752232142857 145.73"
                                    cy="81.6088"
                                    cx="166.94872767857143"
                                    j={3}
                                    val={22}
                                    barheight="64.12119999999999"
                                    barwidth="6.043392857142857"
                                    />
                                    <path
                                    id="SvgjsPath1354"
                                    d="M 166.94872767857143 145.73L 166.94872767857143 5Q 166.94872767857143 0 171.94872767857143 0L 167.9921205357143 0Q 172.9921205357143 0 172.9921205357143 5L 172.9921205357143 5L 172.9921205357143 145.73L 172.9921205357143 145.73z"
                                    fill="rgba(255,255,255,0.8)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMask54q3f6ey)"
                                    pathto="M 166.94872767857143 145.73L 166.94872767857143 5Q 166.94872767857143 0 171.94872767857143 0L 167.9921205357143 0Q 172.9921205357143 0 172.9921205357143 5L 172.9921205357143 5L 172.9921205357143 145.73L 172.9921205357143 145.73z"
                                    pathfrom="M 166.94872767857143 145.73L 166.94872767857143 145.73L 172.9921205357143 145.73L 172.9921205357143 145.73L 172.9921205357143 145.73L 172.9921205357143 145.73L 172.9921205357143 145.73L 166.94872767857143 145.73"
                                    cy={0}
                                    cx="204.7199330357143"
                                    j={4}
                                    val={50}
                                    barheight="145.73"
                                    barwidth="6.043392857142857"
                                    />
                                    <path
                                    id="SvgjsPath1356"
                                    d="M 204.7199330357143 145.73L 204.7199330357143 121.58399999999999Q 204.7199330357143 116.58399999999999 209.7199330357143 116.58399999999999L 205.76332589285715 116.58399999999999Q 210.76332589285715 116.58399999999999 210.76332589285715 121.58399999999999L 210.76332589285715 121.58399999999999L 210.76332589285715 145.73L 210.76332589285715 145.73z"
                                    fill="rgba(255,255,255,0.8)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMask54q3f6ey)"
                                    pathto="M 204.7199330357143 145.73L 204.7199330357143 121.58399999999999Q 204.7199330357143 116.58399999999999 209.7199330357143 116.58399999999999L 205.76332589285715 116.58399999999999Q 210.76332589285715 116.58399999999999 210.76332589285715 121.58399999999999L 210.76332589285715 121.58399999999999L 210.76332589285715 145.73L 210.76332589285715 145.73z"
                                    pathfrom="M 204.7199330357143 145.73L 204.7199330357143 145.73L 210.76332589285715 145.73L 210.76332589285715 145.73L 210.76332589285715 145.73L 210.76332589285715 145.73L 210.76332589285715 145.73L 204.7199330357143 145.73"
                                    cy="116.58399999999999"
                                    cx="242.49113839285715"
                                    j={5}
                                    val={10}
                                    barheight="29.145999999999997"
                                    barwidth="6.043392857142857"
                                    />
                                    <path
                                    id="SvgjsPath1358"
                                    d="M 242.49113839285715 145.73L 242.49113839285715 34.146Q 242.49113839285715 29.146 247.49113839285715 29.146L 243.53453125000001 29.146Q 248.53453125000001 29.146 248.53453125000001 34.146L 248.53453125000001 34.146L 248.53453125000001 145.73L 248.53453125000001 145.73z"
                                    fill="rgba(255,255,255,0.8)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMask54q3f6ey)"
                                    pathto="M 242.49113839285715 145.73L 242.49113839285715 34.146Q 242.49113839285715 29.146 247.49113839285715 29.146L 243.53453125000001 29.146Q 248.53453125000001 29.146 248.53453125000001 34.146L 248.53453125000001 34.146L 248.53453125000001 145.73L 248.53453125000001 145.73z"
                                    pathfrom="M 242.49113839285715 145.73L 242.49113839285715 145.73L 248.53453125000001 145.73L 248.53453125000001 145.73L 248.53453125000001 145.73L 248.53453125000001 145.73L 248.53453125000001 145.73L 242.49113839285715 145.73"
                                    cy="29.146"
                                    cx="280.26234375"
                                    j={6}
                                    val={40}
                                    barheight="116.58399999999999"
                                    barwidth="6.043392857142857"
                                    />
                                    <g
                                    id="SvgjsG1344"
                                    className="apexcharts-bar-goals-markers"
                                    style={{ pointerEvents: "none" }}
                                    >
                                    <g
                                        id="SvgjsG1345"
                                        className="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                        id="SvgjsG1347"
                                        className="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                        id="SvgjsG1349"
                                        className="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                        id="SvgjsG1351"
                                        className="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                        id="SvgjsG1353"
                                        className="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                        id="SvgjsG1355"
                                        className="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                        id="SvgjsG1357"
                                        className="apexcharts-bar-goals-groups"
                                    />
                                    </g>
                                </g>
                                <g
                                    id="SvgjsG1343"
                                    className="apexcharts-datalabels"
                                    datarealindex={0}
                                />
                                </g>
                                <line
                                id="SvgjsLine1421"
                                x1={0}
                                y1={0}
                                x2="264.3984375"
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                                />
                                <line
                                id="SvgjsLine1422"
                                x1={0}
                                y1={0}
                                x2="264.3984375"
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                                />
                                <g
                                id="SvgjsG1423"
                                className="apexcharts-yaxis-annotations"
                                />
                                <g
                                id="SvgjsG1424"
                                className="apexcharts-xaxis-annotations"
                                />
                                <g
                                id="SvgjsG1425"
                                className="apexcharts-point-annotations"
                                />
                            </g>
                            <g
                                id="SvgjsG1382"
                                className="apexcharts-yaxis"
                                rel={0}
                                transform="translate(11.6015625, 0)"
                            >
                                <g id="SvgjsG1383" className="apexcharts-yaxis-texts-g">
                                <text
                                    id="SvgjsText1385"
                                    fontFamily="inherit"
                                    x={20}
                                    y="36.5"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1386">50</tspan>
                                    <title>50</title>
                                </text>
                                <text
                                    id="SvgjsText1388"
                                    fontFamily="inherit"
                                    x={20}
                                    y="65.646"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1389">40</tspan>
                                    <title>40</title>
                                </text>
                                <text
                                    id="SvgjsText1391"
                                    fontFamily="inherit"
                                    x={20}
                                    y="94.792"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1392">30</tspan>
                                    <title>30</title>
                                </text>
                                <text
                                    id="SvgjsText1394"
                                    fontFamily="inherit"
                                    x={20}
                                    y="123.938"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1395">20</tspan>
                                    <title>20</title>
                                </text>
                                <text
                                    id="SvgjsText1397"
                                    fontFamily="inherit"
                                    x={20}
                                    y="153.084"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1398">10</tspan>
                                    <title>10</title>
                                </text>
                                <text
                                    id="SvgjsText1400"
                                    fontFamily="inherit"
                                    x={20}
                                    y="182.23"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1401">0</tspan>
                                    <title>0</title>
                                </text>
                                </g>
                            </g>
                            <g id="SvgjsG1331" className="apexcharts-annotations" />
                            </svg>
                            <div className="apexcharts-legend" style={{ maxHeight: 110 }} />
                            <div className="apexcharts-tooltip apexcharts-theme-dark">
                            <div
                                className="apexcharts-tooltip-title"
                                style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: 12
                                }}
                            />
                            <div
                                className="apexcharts-tooltip-series-group"
                                style={{ order: 1 }}
                            >
                                <span className="apexcharts-tooltip-marker" />
                                <div
                                className="apexcharts-tooltip-text"
                                style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                    fontSize: 12
                                }}
                                >
                                <div className="apexcharts-tooltip-y-group">
                                    <span className="apexcharts-tooltip-text-y-label" />
                                    <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                    <span className="apexcharts-tooltip-text-goals-label" />
                                    <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                    <span className="apexcharts-tooltip-text-z-label" />
                                    <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                            <div className="apexcharts-yaxistooltip-text" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                        Website View
                        </h6>
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        Last Campaign Performance
                        </p>
                    </div>
                    <div className="p-6 border-t border-blue-gray-50 px-6 py-5">
                        <p className="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4 text-inherit"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        &nbsp;campaign sent 2 days ago
                        </p>
                    </div>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg -mt-6">
                        <div style={{ minHeight: 235 }}>
                        <div
                            id="apexcharts5t6kxiil"
                            className="apexcharts-canvas apexcharts5t6kxiil apexcharts-theme-light"
                            style={{ width: 326, height: 220 }}
                        >
                            <svg
                            id="SvgjsSvg1426"
                            width={326}
                            height={220}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlnssvgjs="http://svgjs.dev"
                            className="apexcharts-svg apexcharts-zoomable"
                            xmlnsdata="ApexChartsNS"
                            transform="translate(0, 0)"
                            style={{ background: "transparent" }}
                            >
                            <g
                                id="SvgjsG1428"
                                className="apexcharts-inner apexcharts-graphical"
                                transform="translate(48.90625, 35)"
                            >
                                <defs id="SvgjsDefs1427">
                                <clipPath id="gridRectMask5t6kxiil">
                                    <rect
                                    id="SvgjsRect1434"
                                    width="266.09375"
                                    height="150.73"
                                    x="-4.5"
                                    y="-2.5"
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                    />
                                </clipPath>
                                <clipPath id="forecastMask5t6kxiil" />
                                <clipPath id="nonForecastMask5t6kxiil" />
                                <clipPath id="gridRectMarkerMask5t6kxiil">
                                    <rect
                                    id="SvgjsRect1435"
                                    width="309.09375"
                                    height="197.73"
                                    x={-26}
                                    y={-26}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                    />
                                </clipPath>
                                </defs>
                                <line
                                id="SvgjsLine1433"
                                x1={0}
                                y1={0}
                                x2={0}
                                y2="145.73"
                                stroke="#b6b6b6"
                                strokeDasharray={3}
                                strokeLinecap="butt"
                                className="apexcharts-xcrosshairs"
                                x={0}
                                y={0}
                                width={1}
                                height="145.73"
                                fill="#b1b9c4"
                                filter="none"
                                fillOpacity="0.9"
                                strokeWidth={1}
                                />
                                <g
                                id="SvgjsG1458"
                                className="apexcharts-xaxis"
                                transform="translate(0, 0)"
                                >
                                <g
                                    id="SvgjsG1459"
                                    className="apexcharts-xaxis-texts-g"
                                    transform="translate(0, -4)"
                                >
                                    <text
                                    id="SvgjsText1461"
                                    fontFamily="inherit"
                                    x={0}
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1462">Apr</tspan>
                                    <title>Apr</title>
                                    </text>
                                    <text
                                    id="SvgjsText1464"
                                    fontFamily="inherit"
                                    x="32.13671875"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1465">May</tspan>
                                    <title>May</title>
                                    </text>
                                    <text
                                    id="SvgjsText1467"
                                    fontFamily="inherit"
                                    x="64.2734375"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1468">Jun</tspan>
                                    <title>Jun</title>
                                    </text>
                                    <text
                                    id="SvgjsText1470"
                                    fontFamily="inherit"
                                    x="96.41015625"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1471">Jul</tspan>
                                    <title>Jul</title>
                                    </text>
                                    <text
                                    id="SvgjsText1473"
                                    fontFamily="inherit"
                                    x="128.546875"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1474">Aug</tspan>
                                    <title>Aug</title>
                                    </text>
                                    <text
                                    id="SvgjsText1476"
                                    fontFamily="inherit"
                                    x="160.68359375"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1477">Sep</tspan>
                                    <title>Sep</title>
                                    </text>
                                    <text
                                    id="SvgjsText1479"
                                    fontFamily="inherit"
                                    x="192.8203125"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1480">Oct</tspan>
                                    <title>Oct</title>
                                    </text>
                                    <text
                                    id="SvgjsText1482"
                                    fontFamily="inherit"
                                    x="224.95703125"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1483">Nov</tspan>
                                    <title>Nov</title>
                                    </text>
                                    <text
                                    id="SvgjsText1485"
                                    fontFamily="inherit"
                                    x="257.09375"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1486">Dec</tspan>
                                    <title>Dec</title>
                                    </text>
                                </g>
                                </g>
                                <g id="SvgjsG1510" className="apexcharts-grid">
                                <g
                                    id="SvgjsG1511"
                                    className="apexcharts-gridlines-horizontal"
                                >
                                    <line
                                    id="SvgjsLine1522"
                                    x1={0}
                                    y1={0}
                                    x2="257.09375"
                                    y2={0}
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1523"
                                    x1={0}
                                    y1="24.28833333333333"
                                    x2="257.09375"
                                    y2="24.28833333333333"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1524"
                                    x1={0}
                                    y1="48.57666666666666"
                                    x2="257.09375"
                                    y2="48.57666666666666"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1525"
                                    x1={0}
                                    y1="72.865"
                                    x2="257.09375"
                                    y2="72.865"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1526"
                                    x1={0}
                                    y1="97.15333333333332"
                                    x2="257.09375"
                                    y2="97.15333333333332"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1527"
                                    x1={0}
                                    y1="121.44166666666665"
                                    x2="257.09375"
                                    y2="121.44166666666665"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1528"
                                    x1={0}
                                    y1="145.73"
                                    x2="257.09375"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                </g>
                                <g
                                    id="SvgjsG1512"
                                    className="apexcharts-gridlines-vertical"
                                >
                                    <line
                                    id="SvgjsLine1513"
                                    x1={0}
                                    y1={0}
                                    x2={0}
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1514"
                                    x1="32.13671875"
                                    y1={0}
                                    x2="32.13671875"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1515"
                                    x1="64.2734375"
                                    y1={0}
                                    x2="64.2734375"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1516"
                                    x1="96.41015625"
                                    y1={0}
                                    x2="96.41015625"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1517"
                                    x1="128.546875"
                                    y1={0}
                                    x2="128.546875"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1518"
                                    x1="160.68359375"
                                    y1={0}
                                    x2="160.68359375"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1519"
                                    x1="192.8203125"
                                    y1={0}
                                    x2="192.8203125"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1520"
                                    x1="224.95703125"
                                    y1={0}
                                    x2="224.95703125"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1521"
                                    x1="257.09375"
                                    y1={0}
                                    x2="257.09375"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                </g>
                                <line
                                    id="SvgjsLine1530"
                                    x1={0}
                                    y1="145.73"
                                    x2="257.09375"
                                    y2="145.73"
                                    stroke="transparent"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                />
                                <line
                                    id="SvgjsLine1529"
                                    x1={0}
                                    y1={1}
                                    x2={0}
                                    y2="145.73"
                                    stroke="transparent"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                />
                                </g>
                                <g
                                id="SvgjsG1436"
                                className="apexcharts-line-series apexcharts-plot-series"
                                >
                                <g
                                    id="SvgjsG1437"
                                    className="apexcharts-series"
                                    seriesname="Sales"
                                    datalongestseries="true"
                                    rel={1}
                                    datarealindex={0}
                                >
                                    <path
                                    id="SvgjsPath1457"
                                    d="M 0 133.5858333333333L 32.13671875 136.01466666666667L 64.2734375 72.865L 96.41015625 68.00733333333334L 128.546875 24.28833333333334L 160.68359375 60.72083333333333L 192.8203125 97.15333333333334L 224.95703125 89.86683333333333L 257.09375 24.28833333333334"
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="rgba(255,255,255,0.8)"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={5}
                                    strokeDasharray={0}
                                    className="apexcharts-line"
                                    index={0}
                                    clipPath="url(#gridRectMask5t6kxiil)"
                                    pathto="M 0 133.5858333333333L 32.13671875 136.01466666666667L 64.2734375 72.865L 96.41015625 68.00733333333334L 128.546875 24.28833333333334L 160.68359375 60.72083333333333L 192.8203125 97.15333333333334L 224.95703125 89.86683333333333L 257.09375 24.28833333333334"
                                    pathfrom="M -1 145.73L -1 145.73L 32.13671875 145.73L 64.2734375 145.73L 96.41015625 145.73L 128.546875 145.73L 160.68359375 145.73L 192.8203125 145.73L 224.95703125 145.73L 257.09375 145.73"
                                    />
                                    <g
                                    id="SvgjsG1438"
                                    className="apexcharts-series-markers-wrap"
                                    datarealindex={0}
                                    >
                                    <g
                                        id="SvgjsG1440"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMask5t6kxiil)"
                                    >
                                        <circle
                                        id="SvgjsCircle1441"
                                        r={5}
                                        cx={0}
                                        cy="133.5858333333333"
                                        className="apexcharts-marker no-pointer-events w24zsfeh3h"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={0}
                                        j={0}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                        <circle
                                        id="SvgjsCircle1442"
                                        r={5}
                                        cx="32.13671875"
                                        cy="136.01466666666667"
                                        className="apexcharts-marker no-pointer-events wq73sgc9o"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={1}
                                        j={1}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1443"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMask5t6kxiil)"
                                    >
                                        <circle
                                        id="SvgjsCircle1444"
                                        r={5}
                                        cx="64.2734375"
                                        cy="72.865"
                                        className="apexcharts-marker no-pointer-events w1uu5b3qq"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={2}
                                        j={2}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1445"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMask5t6kxiil)"
                                    >
                                        <circle
                                        id="SvgjsCircle1446"
                                        r={5}
                                        cx="96.41015625"
                                        cy="68.00733333333334"
                                        className="apexcharts-marker no-pointer-events wlg28gnnq"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={3}
                                        j={3}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1447"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMask5t6kxiil)"
                                    >
                                        <circle
                                        id="SvgjsCircle1448"
                                        r={5}
                                        cx="128.546875"
                                        cy="24.28833333333334"
                                        className="apexcharts-marker no-pointer-events wwz9n8h3m"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={4}
                                        j={4}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1449"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMask5t6kxiil)"
                                    >
                                        <circle
                                        id="SvgjsCircle1450"
                                        r={5}
                                        cx="160.68359375"
                                        cy="60.72083333333333"
                                        className="apexcharts-marker no-pointer-events w9zbuv869k"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={5}
                                        j={5}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1451"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMask5t6kxiil)"
                                    >
                                        <circle
                                        id="SvgjsCircle1452"
                                        r={5}
                                        cx="192.8203125"
                                        cy="97.15333333333334"
                                        className="apexcharts-marker no-pointer-events w1di6wfxy"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={6}
                                        j={6}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1453"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMask5t6kxiil)"
                                    >
                                        <circle
                                        id="SvgjsCircle1454"
                                        r={5}
                                        cx="224.95703125"
                                        cy="89.86683333333333"
                                        className="apexcharts-marker no-pointer-events wc0itwdf8i"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={7}
                                        j={7}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1455"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMask5t6kxiil)"
                                    >
                                        <circle
                                        id="SvgjsCircle1456"
                                        r={5}
                                        cx="257.09375"
                                        cy="24.28833333333334"
                                        className="apexcharts-marker no-pointer-events wa8658fhc"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={8}
                                        j={8}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    </g>
                                </g>
                                <g
                                    id="SvgjsG1439"
                                    className="apexcharts-datalabels"
                                    datarealindex={0}
                                />
                                </g>
                                <line
                                id="SvgjsLine1531"
                                x1={0}
                                y1={0}
                                x2="257.09375"
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                                />
                                <line
                                id="SvgjsLine1532"
                                x1={0}
                                y1={0}
                                x2="257.09375"
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                                />
                                <g
                                id="SvgjsG1533"
                                className="apexcharts-yaxis-annotations"
                                />
                                <g
                                id="SvgjsG1534"
                                className="apexcharts-xaxis-annotations"
                                />
                                <g
                                id="SvgjsG1535"
                                className="apexcharts-point-annotations"
                                />
                                <rect
                                id="SvgjsRect1536"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                                className="apexcharts-zoom-rect"
                                />
                                <rect
                                id="SvgjsRect1537"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                                className="apexcharts-selection-rect"
                                />
                            </g>
                            <rect
                                id="SvgjsRect1432"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                            />
                            <g
                                id="SvgjsG1487"
                                className="apexcharts-yaxis"
                                rel={0}
                                transform="translate(18.90625, 0)"
                            >
                                <g id="SvgjsG1488" className="apexcharts-yaxis-texts-g">
                                <text
                                    id="SvgjsText1490"
                                    fontFamily="inherit"
                                    x={20}
                                    y="36.6"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1491">600</tspan>
                                    <title>600</title>
                                </text>
                                <text
                                    id="SvgjsText1493"
                                    fontFamily="inherit"
                                    x={20}
                                    y="60.88833333333333"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1494">500</tspan>
                                    <title>500</title>
                                </text>
                                <text
                                    id="SvgjsText1496"
                                    fontFamily="inherit"
                                    x={20}
                                    y="85.17666666666665"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1497">400</tspan>
                                    <title>400</title>
                                </text>
                                <text
                                    id="SvgjsText1499"
                                    fontFamily="inherit"
                                    x={20}
                                    y="109.46499999999997"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1500">300</tspan>
                                    <title>300</title>
                                </text>
                                <text
                                    id="SvgjsText1502"
                                    fontFamily="inherit"
                                    x={20}
                                    y="133.7533333333333"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1503">200</tspan>
                                    <title>200</title>
                                </text>
                                <text
                                    id="SvgjsText1505"
                                    fontFamily="inherit"
                                    x={20}
                                    y="158.04166666666663"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1506">100</tspan>
                                    <title>100</title>
                                </text>
                                <text
                                    id="SvgjsText1508"
                                    fontFamily="inherit"
                                    x={20}
                                    y="182.32999999999996"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1509">0</tspan>
                                    <title>0</title>
                                </text>
                                </g>
                            </g>
                            <g id="SvgjsG1429" className="apexcharts-annotations" />
                            </svg>
                            <div className="apexcharts-legend" style={{ maxHeight: 110 }} />
                            <div className="apexcharts-tooltip apexcharts-theme-dark">
                            <div
                                className="apexcharts-tooltip-title"
                                style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: 12
                                }}
                            />
                            <div
                                className="apexcharts-tooltip-series-group"
                                style={{ order: 1 }}
                            >
                                <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(255, 255, 255)" }}
                                />
                                <div
                                className="apexcharts-tooltip-text"
                                style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                    fontSize: 12
                                }}
                                >
                                <div className="apexcharts-tooltip-y-group">
                                    <span className="apexcharts-tooltip-text-y-label" />
                                    <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                    <span className="apexcharts-tooltip-text-goals-label" />
                                    <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                    <span className="apexcharts-tooltip-text-z-label" />
                                    <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
                            <div
                                className="apexcharts-xaxistooltip-text"
                                style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: 12
                                }}
                            />
                            </div>
                            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                            <div className="apexcharts-yaxistooltip-text" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                        Daily Sales
                        </h6>
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        15% increase in today sales
                        </p>
                    </div>
                    <div className="p-6 border-t border-blue-gray-50 px-6 py-5">
                        <p className="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4 text-inherit"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        &nbsp;updated 4 min ago
                        </p>
                    </div>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg -mt-6">
                        <div style={{ minHeight: 235 }}>
                        <div
                            id="apexchartsoslyt9il"
                            className="apexcharts-canvas apexchartsoslyt9il apexcharts-theme-light"
                            style={{ width: 326, height: 220 }}
                        >
                            <svg
                            id="SvgjsSvg1538"
                            width={326}
                            height={220}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlnssvgjs="http://svgjs.dev"
                            className="apexcharts-svg apexcharts-zoomable"
                            xmlnsdata="ApexChartsNS"
                            transform="translate(0, 0)"
                            style={{ background: "transparent" }}
                            >
                            <g
                                id="SvgjsG1540"
                                className="apexcharts-inner apexcharts-graphical"
                                transform="translate(48.90625, 35)"
                            >
                                <defs id="SvgjsDefs1539">
                                <clipPath id="gridRectMaskoslyt9il">
                                    <rect
                                    id="SvgjsRect1546"
                                    width="266.09375"
                                    height="150.73"
                                    x="-4.5"
                                    y="-2.5"
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                    />
                                </clipPath>
                                <clipPath id="forecastMaskoslyt9il" />
                                <clipPath id="nonForecastMaskoslyt9il" />
                                <clipPath id="gridRectMarkerMaskoslyt9il">
                                    <rect
                                    id="SvgjsRect1547"
                                    width="309.09375"
                                    height="197.73"
                                    x={-26}
                                    y={-26}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                    />
                                </clipPath>
                                </defs>
                                <line
                                id="SvgjsLine1545"
                                x1={0}
                                y1={0}
                                x2={0}
                                y2="145.73"
                                stroke="#b6b6b6"
                                strokeDasharray={3}
                                strokeLinecap="butt"
                                className="apexcharts-xcrosshairs"
                                x={0}
                                y={0}
                                width={1}
                                height="145.73"
                                fill="#b1b9c4"
                                filter="none"
                                fillOpacity="0.9"
                                strokeWidth={1}
                                />
                                <g
                                id="SvgjsG1570"
                                className="apexcharts-xaxis"
                                transform="translate(0, 0)"
                                >
                                <g
                                    id="SvgjsG1571"
                                    className="apexcharts-xaxis-texts-g"
                                    transform="translate(0, -4)"
                                >
                                    <text
                                    id="SvgjsText1573"
                                    fontFamily="inherit"
                                    x={0}
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1574">Apr</tspan>
                                    <title>Apr</title>
                                    </text>
                                    <text
                                    id="SvgjsText1576"
                                    fontFamily="inherit"
                                    x="32.13671875"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1577">May</tspan>
                                    <title>May</title>
                                    </text>
                                    <text
                                    id="SvgjsText1579"
                                    fontFamily="inherit"
                                    x="64.2734375"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1580">Jun</tspan>
                                    <title>Jun</title>
                                    </text>
                                    <text
                                    id="SvgjsText1582"
                                    fontFamily="inherit"
                                    x="96.41015625"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1583">Jul</tspan>
                                        <title>Jul</title>
                                    </text>
                                    <text
                                    id="SvgjsText1585"
                                    fontFamily="inherit"
                                    x="128.546875"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                        <tspan id="SvgjsTspan1586">Aug</tspan>
                                    <title>Aug</title>
                                    </text>
                                    <text
                                    id="SvgjsText1588"
                                    fontFamily="inherit"
                                    x="160.68359375"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1589">Sep</tspan>
                                    <title>Sep</title>
                                    </text>
                                    <text
                                    id="SvgjsText1591"
                                    fontFamily="inherit"
                                    x="192.8203125"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1592">Oct</tspan>
                                    <title>Oct</title>
                                    </text>
                                    <text
                                    id="SvgjsText1594"
                                    fontFamily="inherit"
                                    x="224.95703125"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1595">Nov</tspan>
                                    <title>Nov</title>
                                    </text>
                                    <text
                                    id="SvgjsText1597"
                                    fontFamily="inherit"
                                    x="257.09375"
                                    y="174.73"
                                    textAnchor="middle"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-xaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                    >
                                    <tspan id="SvgjsTspan1598">Dec</tspan>
                                    <title>Dec</title>
                                    </text>
                                </g>
                                </g>
                                <g id="SvgjsG1622" className="apexcharts-grid">
                                <g
                                    id="SvgjsG1623"
                                    className="apexcharts-gridlines-horizontal"
                                >
                                    <line
                                    id="SvgjsLine1634"
                                    x1={0}
                                    y1={0}
                                    x2="257.09375"
                                    y2={0}
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1635"
                                    x1={0}
                                    y1="24.28833333333333"
                                    x2="257.09375"
                                    y2="24.28833333333333"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1636"
                                    x1={0}
                                    y1="48.57666666666666"
                                    x2="257.09375"
                                    y2="48.57666666666666"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1637"
                                    x1={0}
                                    y1="72.865"
                                    x2="257.09375"
                                    y2="72.865"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1638"
                                    x1={0}
                                    y1="97.15333333333332"
                                    x2="257.09375"
                                    y2="97.15333333333332"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1639"
                                    x1={0}
                                    y1="121.44166666666665"
                                    x2="257.09375"
                                    y2="121.44166666666665"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1640"
                                    x1={0}
                                    y1="145.73"
                                    x2="257.09375"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                </g>
                                <g
                                    id="SvgjsG1624"
                                    className="apexcharts-gridlines-vertical"
                                >
                                    <line
                                    id="SvgjsLine1625"
                                    x1={0}
                                    y1={0}
                                    x2={0}
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1626"
                                    x1="32.13671875"
                                    y1={0}
                                    x2="32.13671875"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1627"
                                    x1="64.2734375"
                                    y1={0}
                                    x2="64.2734375"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1628"
                                    x1="96.41015625"
                                    y1={0}
                                    x2="96.41015625"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1629"
                                    x1="128.546875"
                                    y1={0}
                                    x2="128.546875"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1630"
                                    x1="160.68359375"
                                    y1={0}
                                    x2="160.68359375"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1631"
                                    x1="192.8203125"
                                    y1={0}
                                    x2="192.8203125"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1632"
                                    x1="224.95703125"
                                    y1={0}
                                    x2="224.95703125"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                    <line
                                    id="SvgjsLine1633"
                                    x1="257.09375"
                                    y1={0}
                                    x2="257.09375"
                                    y2="145.73"
                                    stroke="#ffffff40"
                                    strokeDasharray={5}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                    />
                                </g>
                                <line
                                    id="SvgjsLine1642"
                                    x1={0}
                                    y1="145.73"
                                    x2="257.09375"
                                    y2="145.73"
                                    stroke="transparent"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                />
                                <line
                                    id="SvgjsLine1641"
                                    x1={0}
                                    y1={1}
                                    x2={0}
                                    y2="145.73"
                                    stroke="transparent"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                />
                                </g>
                                <g
                                id="SvgjsG1548"
                                className="apexcharts-line-series apexcharts-plot-series"
                                >
                                <g
                                    id="SvgjsG1549"
                                    className="apexcharts-series"
                                    seriesname="Tasks"
                                    datalongestseries="true"
                                    rel={1}
                                    datarealindex={0}
                                >
                                    <path
                                    id="SvgjsPath1569"
                                    d="M 0 133.5858333333333L 32.13671875 136.01466666666667L 64.2734375 72.865L 96.41015625 92.29566666666666L 128.546875 24.28833333333334L 160.68359375 85.00916666666666L 192.8203125 48.57666666666667L 224.95703125 89.86683333333333L 257.09375 24.28833333333334"
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="rgba(255,255,255,0.8)"
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={5}
                                    strokeDasharray={0}
                                    className="apexcharts-line"
                                    index={0}
                                    clipPath="url(#gridRectMaskoslyt9il)"
                                    pathto="M 0 133.5858333333333L 32.13671875 136.01466666666667L 64.2734375 72.865L 96.41015625 92.29566666666666L 128.546875 24.28833333333334L 160.68359375 85.00916666666666L 192.8203125 48.57666666666667L 224.95703125 89.86683333333333L 257.09375 24.28833333333334"
                                    pathfrom="M -1 145.73L -1 145.73L 32.13671875 145.73L 64.2734375 145.73L 96.41015625 145.73L 128.546875 145.73L 160.68359375 145.73L 192.8203125 145.73L 224.95703125 145.73L 257.09375 145.73"
                                    />
                                    <g
                                    id="SvgjsG1550"
                                    className="apexcharts-series-markers-wrap"
                                    datarealindex={0}
                                    >
                                    <g
                                        id="SvgjsG1552"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMaskoslyt9il)"
                                    >
                                        <circle
                                        id="SvgjsCircle1553"
                                        r={5}
                                        cx={0}
                                        cy="133.5858333333333"
                                        className="apexcharts-marker no-pointer-events w2litnrf6"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={0}
                                        j={0}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                        <circle
                                        id="SvgjsCircle1554"
                                        r={5}
                                        cx="32.13671875"
                                        cy="136.01466666666667"
                                        className="apexcharts-marker no-pointer-events wxvlshytp"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={1}
                                        j={1}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1555"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMaskoslyt9il)"
                                    >
                                        <circle
                                        id="SvgjsCircle1556"
                                        r={5}
                                        cx="64.2734375"
                                        cy="72.865"
                                        className="apexcharts-marker no-pointer-events w6tazbtbjl"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={2}
                                        j={2}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1557"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMaskoslyt9il)"
                                    >
                                        <circle
                                        id="SvgjsCircle1558"
                                        r={5}
                                        cx="96.41015625"
                                        cy="92.29566666666666"
                                        className="apexcharts-marker no-pointer-events wokrqlgtz"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={3}
                                        j={3}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1559"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMaskoslyt9il)"
                                    >
                                        <circle
                                        id="SvgjsCircle1560"
                                        r={5}
                                        cx="128.546875"
                                        cy="24.28833333333334"
                                        className="apexcharts-marker no-pointer-events wj64h88h5"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={4}
                                        j={4}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1561"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMaskoslyt9il)"
                                    >
                                        <circle
                                        id="SvgjsCircle1562"
                                        r={5}
                                        cx="160.68359375"
                                        cy="85.00916666666666"
                                        className="apexcharts-marker no-pointer-events ws8cavzib"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={5}
                                        j={5}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1563"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMaskoslyt9il)"
                                    >
                                        <circle
                                        id="SvgjsCircle1564"
                                        r={5}
                                        cx="192.8203125"
                                        cy="48.57666666666667"
                                        className="apexcharts-marker no-pointer-events wsa3lucji"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={6}
                                        j={6}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1565"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMaskoslyt9il)"
                                    >
                                        <circle
                                        id="SvgjsCircle1566"
                                        r={5}
                                        cx="224.95703125"
                                        cy="89.86683333333333"
                                        className="apexcharts-marker no-pointer-events wfekardw5"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={7}
                                        j={7}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    <g
                                        id="SvgjsG1567"
                                        className="apexcharts-series-markers"
                                        clipPath="url(#gridRectMarkerMaskoslyt9il)"
                                    >
                                        <circle
                                        id="SvgjsCircle1568"
                                        r={5}
                                        cx="257.09375"
                                        cy="24.28833333333334"
                                        className="apexcharts-marker no-pointer-events wg1n66bbyj"
                                        stroke="#ffffff"
                                        fill="#ffffff"
                                        fillOpacity={1}
                                        strokeWidth={2}
                                        strokeOpacity="0.9"
                                        rel={8}
                                        j={8}
                                        index={0}
                                        default-marker-size={5}
                                        />
                                    </g>
                                    </g>
                                </g>
                                <g
                                    id="SvgjsG1551"
                                    className="apexcharts-datalabels"
                                    datarealindex={0}
                                />
                                </g>
                                <line
                                id="SvgjsLine1643"
                                x1={0}
                                y1={0}
                                x2="257.09375"
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                                />
                                <line
                                id="SvgjsLine1644"
                                x1={0}
                                y1={0}
                                x2="257.09375"
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                                />
                                <g
                                id="SvgjsG1645"
                                className="apexcharts-yaxis-annotations"
                                />
                                <g
                                id="SvgjsG1646"
                                className="apexcharts-xaxis-annotations"
                                />
                                <g
                                id="SvgjsG1647"
                                className="apexcharts-point-annotations"
                                />
                                <rect
                                id="SvgjsRect1648"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                                className="apexcharts-zoom-rect"
                                />
                                <rect
                                id="SvgjsRect1649"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                                className="apexcharts-selection-rect"
                                />
                            </g>
                            <rect
                                id="SvgjsRect1544"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                            />
                            <g
                                id="SvgjsG1599"
                                className="apexcharts-yaxis"
                                rel={0}
                                transform="translate(18.90625, 0)"
                            >
                                <g id="SvgjsG1600" className="apexcharts-yaxis-texts-g">
                                <text
                                    id="SvgjsText1602"
                                    fontFamily="inherit"
                                    x={20}
                                    y="36.6"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1603">600</tspan>
                                    <title>600</title>
                                </text>
                                <text
                                    id="SvgjsText1605"
                                    fontFamily="inherit"
                                    x={20}
                                    y="60.88833333333333"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1606">500</tspan>
                                    <title>500</title>
                                </text>
                                <text
                                    id="SvgjsText1608"
                                    fontFamily="inherit"
                                    x={20}
                                    y="85.17666666666665"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1609">400</tspan>
                                    <title>400</title>
                                </text>
                                <text
                                    id="SvgjsText1611"
                                    fontFamily="inherit"
                                    x={20}
                                    y="109.46499999999997"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1612">300</tspan>
                                    <title>300</title>
                                </text>
                                <text
                                    id="SvgjsText1614"
                                    fontFamily="inherit"
                                    x={20}
                                    y="133.7533333333333"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1615">200</tspan>
                                    <title>200</title>
                                </text>
                                <text
                                    id="SvgjsText1617"
                                    fontFamily="inherit"
                                    x={20}
                                    y="158.04166666666663"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1618">100</tspan>
                                    <title>100</title>
                                </text>
                                <text
                                    id="SvgjsText1620"
                                    fontFamily="inherit"
                                    x={20}
                                    y="182.32999999999996"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="13px"
                                    fontWeight={300}
                                    fill="#ffffff"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                >
                                    <tspan id="SvgjsTspan1621">0</tspan>
                                    <title>0</title>
                                </text>
                                </g>
                            </g>
                            <g id="SvgjsG1541" className="apexcharts-annotations" />
                            </svg>
                            <div className="apexcharts-legend" style={{ maxHeight: 110 }} />
                            <div className="apexcharts-tooltip apexcharts-theme-dark">
                            <div
                                className="apexcharts-tooltip-title"
                                style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: 12
                                }}
                            />
                            <div
                                className="apexcharts-tooltip-series-group"
                                style={{ order: 1 }}
                            >
                                <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(255, 255, 255)" }}
                                />
                                <div
                                className="apexcharts-tooltip-text"
                                style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                    fontSize: 12
                                }}
                                >
                                <div className="apexcharts-tooltip-y-group">
                                    <span className="apexcharts-tooltip-text-y-label" />
                                    <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                    <span className="apexcharts-tooltip-text-goals-label" />
                                    <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                    <span className="apexcharts-tooltip-text-z-label" />
                                    <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-dark">
                            <div
                                className="apexcharts-xaxistooltip-text"
                                style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: 12
                                }}
                            />
                            </div>
                            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-dark">
                            <div className="apexcharts-yaxistooltip-text" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                        Completed Tasks
                        </h6>
                        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                        Last Campaign Performance
                        </p>
                    </div>
                    <div className="p-6 border-t border-blue-gray-50 px-6 py-5">
                        <p className="antialiased font-sans text-sm leading-normal flex items-center font-normal text-blue-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4 text-inherit"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        &nbsp;just updated
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default Dashboards