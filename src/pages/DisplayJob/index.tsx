import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import { Container, Content, Breadcrumbs, Header, TextBox } from './styles';
import JobCard from '../../components/JobCard';

import insight from '../../assets/insight.png';

import { PageWrapper } from '../styles';

import { useJob } from '../../hooks/job';

const SecondPage: React.FC = () => {
	const history = useHistory();

	const { selectedJob } = useJob();

	const handleBackClick = (): void => {
		history.push('/');
	};

	return (
		<Container>
			<Content>
				<PageWrapper>
					<Breadcrumbs onClick={handleBackClick}>
						<MdKeyboardBackspace size={30} />
						<p>Ver todas as oportunidades</p>
					</Breadcrumbs>
					<Header>
						<JobCard
							title={selectedJob.title}
							location={selectedJob.location}
							work={selectedJob.company}
							fullTime={selectedJob.type === 'Full Time'}
							hover={false}
							createdAt={selectedJob.created_at}
						/>
					</Header>
					<TextBox>
						<h2>Descrição da oportunidade</h2>
						<div className="text-box">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
								hendrerit ornare sagittis. Nam at tincidunt risus. Morbi eu erat
								ac est convallis consequat a in magna. Phasellus sit amet
								efficitur magna. Suspendisse fermentum nisl non velit imperdiet
								accumsan.
							</p>
						</div>
					</TextBox>
					<TextBox>
						<h2>Como aplicar?</h2>
						<div className="text-box">
							<p>
								Interessado? Acesse o link do formulário para registrar seus
								dados, enviar seu currículo e solucionar o desafio. Você será
								desclassificado se não resolver o desafio ou fugir do tema.
								https://forms.gle/mbC8hrNKqeuBanB9A
							</p>
						</div>
					</TextBox>
				</PageWrapper>
			</Content>
		</Container>
	);
};

export default SecondPage;
