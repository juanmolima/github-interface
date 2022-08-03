import React, { useContext } from "react";
import { GitHubContext } from "../../providers/git";
import * as Stl from "./styles";
import { GoMarkGithub } from "react-icons/go";

export default function Profile() {
    const { gitState } = useContext(GitHubContext);

    return (
        <>
            <Stl.Wrapper>
                <Stl.Container>
                    <img src={gitState.user.avatar_url} alt="Profile Avatar" />
                    <div>
                        <Stl.Name>
                            <h1>{gitState.user.name}</h1>
                        </Stl.Name>
                        <Stl.UserName>
                            <h3>
                                <GoMarkGithub /> - &nbsp;
                                <a href={gitState.user.html_url} target="_blank" rel="noreferrer">
                                    {gitState.user.login}
                                </a>
                            </h3>
                        </Stl.UserName>
                    </div>
                    <Stl.UserStats>
                        <div>
                            <h4>Repositórios</h4>
                            <span>{gitState.user.public_repos}</span>
                        </div>
                    </Stl.UserStats>
                </Stl.Container>
            </Stl.Wrapper>
        </>
    );
}
