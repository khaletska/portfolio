import './projects.css';

const Projects = () => {
    return (
        <section id='projects' className="container">
            <div
                style={{ width: "100%" }}
                className="wrapper">
                <h2>Projects</h2>
                <div className="proj-list">
                    <div className="proj-item">

                        <div className='front'>
                            <p className="proj-name">SORK</p>
                            <p className='proj-desc'>
                                A single-page Facebook-like application created with React.js, Typescript, SCSS for front-
                                end and Golang, Sqlite3 for backend API server.
                            </p>
                        </div>
                        <div className='back'>
                            <img src="https://lh3.googleusercontent.com/fife/ALs6j_GLjFFydTWBf56jANYJ_BZgI7p4zHYKyfh_VzX_xwI7Gz8YBOT2NzgL_wc6l7QM9iQSZFXUHwQHlb635_G5vegqJoHVUKg-usfVnYNF-3DQTkb8_PPTPLFEdJ5piTohFJrOeJcgLhtA9dJX0uo0czNE3OV616kBJxcE-zYHHqSv7y41NQBEFkJ9fP7Z5YDTUW2eqeqUgrTvT3nYmX-Fq6XzwA6F5NvN3bfT0p22hG8ZW1IT6keI6cOwBNIF5Telhu_5J7RBijUf-ykNUf7bJVumSUpmFsu1ZmPwKooJuv8_vjfN0q9HIwese8yrh5QjBQ0BDbb1uVWVdyjPfS2655AXzUX67wM1AwTT_YTU80SlolaGENXr9QsYFMSzNYsReDJ2cM_pl7-KsbkXJpApU44IKA6WT9CY3HRJx4867pjW8u9pq7zaJPIy-Ko2ywznAV2XXHfkmwi3VUjDYpxxb7MDlMHNSLmu0JGSE0WQGd6e8mDCEFjNY7Xsg573fjDEL6Bnubh2pyYWxCtj2viLSjlAq58xt_qUC5-E6tc3gjqonOV0kjm7q9LcF3O2lBSsiIedLXro9thajhLcII1lwUrY1PrOovhNH3zqy_7Vvv942vaVAy15VaC_FLyRBEGaJoOQX3A0_vTrde6Hp7hDluhklEaLb3yZUP__V3LPyyi9PD41JGEHxXsGftJv8HaGn17epv_AHnQPbiHyr9MZspHKxzgfQ3ncjKbCSkZQww9osvo_e1Ac1lsT2ptrVlQoqTdQ1c_dSV455E-gN-L0LG0_9GFKpzr1AR9ik1LijqVyKV-dxcPahKA1RpsNzklZ8sYFrGAEk6hQNicI0RWtyYV4epIRLZLy3mmzPS_kMi5HzpmR-C3u-E1AY8UPpF4ey7cMqPaygLQtsGeT7G0apjj7fovzrcPl1CVEwM3B84ng0fB_Dw9JxPs-J0PkqP4759gzxlKAqhC98RQbxT7lLMc8S3xfE58fWWn-zkGqmWl2MjlYIDez5B4lvgKwAFDUojT47E-eKv6skAiLnGYzEBqsCUy5nLagvYsH3_kIG0uF0Ieq7_U5Tn7qQzry6xEYeCWmOOBI-6PGsvQAqDHHBDuWTh9_0CFiJwGxwxqBHrdAKOWwGcjtKPNSj_N5YqVziwgI3GLnhqqNtW68-xPn6E97YPkzAuhGj4RjUJQWWOkuYFyShCnWThq-EXlHsC_JFhu2Ord1ch39raxKaGPyqQ6qWwqPFjYRJpX_s2M14DBVK-cM-dgxZqrqw2nsgFF8z4Z6KXzO-jTsEle3-sgpa2KXohWWfdJ2ENQoPnk_UZeoHIBmtMZhIlBUG-FL_Y6s9J-9nR3XqO3tHmadEVFiZP5fDbO9sjzeLZMIxlf8T0eJqJjP2y-cyProTLKjtcS6qtZFIA1wzfTGYMx6XBSkxylqN30TFNg71DBqsriwzz7SndOzditqjIIP9fQKgf84t9BfmI8tyUL8B5z1Wjr005I3QtI2cXeXjYM8zSOSd0HHjOagJzVxgGXl7ijMI8EmRRm9YcfYT42R6XBTf82H-Gi64ZbXEDrDVez6aOtzhUZhgyvW5tJ1AwXeQG28ob8V1RjV9yCY4SFxEeWdnVbB2h4GCY9IchY5ZWrP4L0emxRVfsvvG2y0515GPJqs6qk1zG59Ab8cCGbcr0P1u-mSH6tevVzYPaqqlXFSZnJb3qW_d11ldQsTRAMrmuE=w3024-h1476"
                                alt="SORK" />
                            <div className='btn-box'>
                                <a className='btn' href="https://github.com/khaletska/SORK">
                                    Repo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="proj-item">
                        <div className='front'>
                            <p className="proj-name">tetris</p>
                            <p className='proj-desc'>
                                Single player Tetris game developed using vanilla JavaScript with DOM manipulation,
                                without the need for HTML canvas or any frameworks. It utilizes a
                                Golang web server and Gorilla websocket as the backend to display scores.
                            </p>
                        </div>
                        <div className='back'>
                            <img src="https://lh3.google.com/u/1/d/1hMqIN_08xnTFiRkEi0Fb6d3RbkMhHmWH=w2138-h1476-iv1"
                                alt="tetris" />
                            <div className='btn-box'>
                                <a className='btn' href="https://github.com/khaletska/tetris">
                                    Repo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="proj-item">
                        <div className='front'>
                            <p className="proj-name">forum</p>
                            <p className='proj-desc'>
                                A Golang-based web forum, incorporating user authentication with encrypted passwords
                                in an SQLite database, Docker for containerization.
                            </p>
                        </div>
                        <div className='back'>
                            <img src="https://lh3.googleusercontent.com/fife/ALs6j_H1k9IZvdmKxVOEPeCO1NauXRcalSnkjR855cC2jloYYW0j2cPpgBcOoKRq_ybII9oW7zfOm078dXpq60oe4MwwCxZBzaQjSCTRDqDDUXRR4Q-1Jej9tGrlwL3hWd6TE_yBJsmBz8IEztvV71OeuU3HjWR4nLsB4UXaJuNvJctctzq_qXzA1qRWpPkqjsNzqFZfw-wrJ1SNRb42zkyi1jl_xmxsfEwlRJZZzVuQijLYQC7r9z8Q92qatvIAU_VmxZItyy5YOIhaB4gTQfFKeGKksGNsUorJ9f57ZJWTYpRdhjmJ__MHVsVEYZ51zSYlv9wBu6bUqmzF8wqzZ1cKGAEvqe5tjHTQHkk04pfbpysa0mZZ8PRbKw434iIxS3BMUdKs7c9Jbm_6BDiEEzfaFnRK7AveSlLFHIiOLY_Znr2MaTBftym1BpxFZYfz8IsO7DGg5rLhk2xqBJLXuBOnh2Ca7IxsrESNuWidGaB4ztloGvcN9gxvaX4PDu1Z3pcTjYo0mz7KUAqRj1meOhc-qKEpFKo5vRobyBLoHb46u76gaqgHHj7yywbP8p_ohg4z5Z_CLoCt-KbEAIsYdTB-MhMrI4zKT4PRknQl5yvHtOSIa80SVe0IsDz8gSZKxKjADHh1gA_MoJGXwJQ6fYiKw8-ALIjF5LG99EPCi-M2BWq5tvIzKAfFAJxZ04yq10Po1Q6yNYmY-0xOmHaR8hLz7SKN9DrPF0CVB-65xafByAKDXi8Y6spN4Y9L3I2b1tM-UEDXwMdsoYefLsZRoLP4jThNg1mqW3KMl2ZfeLjMhZz0vNo975A0pwQDaDcCRfDEyktJitQJwxyUGUO-JvliZY6rzs7uc3ZNRkTEGSOCD-7aFD623i479-F_B60NdwVxsKedNzWdPQ-4DOVj9nSAA42ZU_1oXJZzDSrjDr5KvhPNDpFQ4Qbatf10FIkocGhIEYuD5GEo99E-499Y8dbLQIMZ8mqHFik6fv9xhe1TJsfxN3Tvoajx5BeW71p2K9feBqVm_U8Gad3RJ65pfxYsup8r8LVmGPTqSYJWqjMrR_AxQCkGi8JwPkxaNDMkEedvjUBT9uQoX4rpG6k6WBu0P6eSJ_TrkmTWpU4di8T-DxEo94Ad9znemD2R4mTolsuuHVUFI_mxtqbUygSkBzA_hC89sP_yRbpg27v78mJ6os7SvYYzZrLJKSJQDFfm_qGw45rgxvKikoGbPV6EowM0dhFTIEoNfKUmV9L2gaimoPB63UVJJmDc9eL5ryDvRkrdDfSAj74DhPWAwOZjEd8SQHKaFrX8nZJQGqZdMcMPwM_VrirotwNFKHRLpOgU4WMKmkf2Zdjogk_HczihfeiOmDHuJ7xKPIsi9_kSM5VmMYbU9zV0XDNtLk08rYJKJqAWCgSBK-pwayCCBJLe3nZ1oUi-CVY5h63UDr9aEU1vfQovawe9A7WMOXmmI24WSNTPgpzv_u-vHVs2ouy_RRVJIlgjsaSET1ayZVp2E0HT4q-L4scoNQyrcRFPEA0wAXUbBbJDLPw_2RymK0AopFSvhU-g07LTQ4ig_o3kyRdOqHnCwoj0TJyC1zvyxRLIWKZHD7ll3p1wNNq9OGyVUQYTnndkNPZMJGq3zACVf4eo9roitFAo_TVJQYvAu8Yb6XnEAjTz-MTsGfiQrcfW5y11M9cQzMLFwm4v4NcDk9MAnR759cK14I_zIqHrhpGP=w3024-h1476"
                                alt="forum" />
                            <div className='btn-box'>
                                <a className='btn' href="https://github.com/khaletska/foorum">
                                    Repo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Projects;