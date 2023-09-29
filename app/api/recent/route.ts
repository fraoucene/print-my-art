import axios from "axios";

export const GET = async () => {
  try {
    console.log("fetch....");
    // const result = await fetch(
    //   "http://localhost:8010/proxy/_next/data/chlEHaZ66ABW-AUWIhDjH/showcase/recent.json",
    //   // "https://www.midjourney.com/showcase/recent/",
    //   {
    //     mode: "no-cors",
    //     credentials: "include",
    //   }
    // );
    const result = await fetch(
      "https://www.midjourney.com/_next/data/chlEHaZ66ABW-AUWIhDjH/showcase/recent.json",
      {
        headers: {
          accept: "*/*",
          "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
          "if-none-match": 'W/"2f364-53huggjt7d4+FQfFK4dmCxo4jM4"',
          "sec-ch-ua":
            '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          cookie:
            "_ga=GA1.1.416108534.1695800660; __stripe_mid=183f70c7-9b1a-4e0b-b84b-f730102026c57f2969; AMP_MKTG_437c42b22c=JTdCJTdE; __Secure-next-auth.callback-url=https%3A%2F%2Fwww.midjourney.com; imageSize=medium; imageLayout_2=hover; getImageAspect=2; fullWidth=false; showHoverIcons=true; __Host-next-auth.csrf-token=7c06e256e9dd1da750a267ec163cb321f1e07f51d9925c8897c1681dc5470b0e%7Cad343314c410300d4292931f387a8bdf0b4d106e91c8f0702f47d22e26b08126; __cf_bm=b8BG.kpVs76rvL.OLmJZHgC_Tj9gthd3d_ndd2.Hfn0-1695980005-0-AWSZxpYEwynEdlXeJz2qvZXMHpAIeSNHVIKhhhhYCDeAncr8UO0f9HuiCZOFaWn4+AQoA9IXr6t1HSCXxLWO4no=; cf_clearance=Ngo6_xBxrTI4WALD5PZrh4.GIrVRsmUlRH8SCVr3S30-1695980069-0-1-7efc5abd.aea0fc60.777a28c1-0.2.1695980069; AMP_437c42b22c=JTdCJTIyZGV2aWNlSWQlMjIlM0ElMjI4ZjdmZTMyZS0yYWFhLTRjNTctOTg1Yy01YWVlYzJiZjc1MjAlMjIlMkMlMjJ1c2VySWQlMjIlM0ElMjIyOWEyYmY3Mi1hMjlhLTQ0YmQtYmYwYi04ZTIwYzczZDk5MDIlMjIlMkMlMjJzZXNzaW9uSWQlMjIlM0ExNjk1OTc4MjIzMDk1JTJDJTIyb3B0T3V0JTIyJTNBZmFsc2UlMkMlMjJsYXN0RXZlbnRUaW1lJTIyJTNBMTY5NTk3OTU0NTg4MiUyQyUyMmxhc3RFdmVudElkJTIyJTNBNTElN0Q=; _ga_Q0DQ5L7K0D=GS1.1.1695978217.8.1.1695980142.0.0.0; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..pMdo87ReI_1630PW.hi9nWT4yzbPmsqDGYJhYAv5PePl9U6vuFzTgF4cZL0D9Sk_vfiaTysTWxFbwSrOHztR6WiR1OYZU4VngwQyxfzbd5EvFD1VqAPVpoTzc2DJq2WRs2p9CCI0CVcZvDAreQtMaqEXRBVQK_XsrwE1I9DHElflSphD43NHPbFeLqFhOMug7kZd1wktGzDs3dr1cLVPAKSuXVhG76Mo2iTgf9iacZoaE_ThsBPSzVEJo2hQ51uZd5wzDYEpphXtOMVSOBUpHcBRkhiGZwyHG5tmgMmt4cPEqC0uktr02AOCKau1EWifjEP0NhdYEo8mLPexfSPuSJBR1J3D7bjAZdNkPqTx7vGrcJhGyvQCtWV2QDD5db5hHLjsqhAM3lD-i3qW806x1oPI2FbtWF7Wq8oUC8ynp1VOUa985qfreJYUj_L2E_ByDqFwLD13uuvs8MRAr0gZpdwMEPWwTCk1RT4PWcR0tCghDl5Poq9LJxfzAxM6EOAX_yeZwODOhLH_tEm8Uc7MBwr63EhHeXIXt0jCUMI7Nbdjuy9aVeefLVTFKXR4yYuZtUZwSO06N4Hd78Yde-BKtqjyO3_0zYxEh0BD2ALyvJ0eQrCIzSxSMxrFS5c-BVxmEcuySbODSf1Cu0NPEw7HwqlMoChsIKd6heJ7vJ2_pcR51uEszhGCT7RdO0egIwMLyMMQZxAhfQxSCJTVOOXNwsuzIkoYwpgpHRHV2Slv2gzY-3vAiPKhbvMAf24qw3zn2URA8SAv8dOFkEHK-KGmiI9URA-_4uI0vIsS6q63d9hQ5wlsTOMhvLrEtHSxf3Jo5JHgImo0JcJP4R-z7dUhSPfzrryVTY_sEaFddDXo0OBscVwR-h6zseM6hSwNqimiLDhMrkSZ456RBaJ54xTXrRY_OgSk5ovxiGgPgP8kGL8jGERawyw7zgsPWiQQhS0FgCmSr_9If7Q5lW3AMQg1iXNZiGcXeJog22qd1gVAafOx-4L_NnZvsfDF-7QML4C-7JaOGnwtQTCYmovDfXHxWEEUc0v8EDRi-aSliURSFSCN52CHVh4kXsLEB7TWk09S3zorCmEEC5lsGSpniyxM1ijsgdHxFY0ZsxXd65UwgJkyAu231lmQbtWYgOqGBwt3e9fTk4rQ1IBC7d90Zj_gfchNxQXBWO5wZ1ZP45wUVKtccsFpyhO2QWSaMANmqaQMLHKePYp62iEyMeqd3oxFhtQruAUXWOB5yamCWxr30n8s4AyQ8Ikmc9nW91PiTTiPH1FYsU9OZ-z71MgfAbpz70_FCAcF5gs4-hQ9fCJslwBQFwERYslHDPkkCKLMQAkbVQ6EtAE18glClH_hd_ag19A.AJhU-moULLqffzNbDRZRRQ; _dd_s=rum=0&expire=1695981042712",
          Referer: "https://www.midjourney.com/showcase/top/",
          "Referrer-Policy": "origin-when-cross-origin",
        },
        body: null,
        method: "GET",
      }
    );
    console.log({ result: result });
    if (!result)
      return new Response("Recent showcase Not Found", { status: 404 });

    return new Response(JSON.stringify({}), { status: 200 });
  } catch (error) {
    // console.log(error);
    return new Response(JSON.stringify({}), { status: 500 });
  }
};
