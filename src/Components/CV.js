import React from "react";
import '../App.css';
import '../index.css';
import profilePic from './hamza.png'
import Navbar from "./Navbar";

function CV() {
    return (
        <>
            <Navbar/>
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-black">
                <img src={profilePic} alt="Profile" className="rounded-full w-32 h-32 mb-4" />
                <h1 className="text-4xl font-bold mb-2">Hamza BOUDRADAR</h1>
                <h2 className="text-2xl font-semibold mb-8">Front-end Developer</h2>
                <div className="max-w-xl">
                    <p className="mb-4">
                        Ingénieur diplômé en Mobiquité, Base de Données et Systèmes, avec une
                        expérience enrichissante dans le secteur de la santé, axée sur le développement
                        Front, Base de données, Cloud.. Je suis à la recherche de nouvelles opportunités
                        et défis ou je pourrais m’épanouir, apprendre d’avantages et apporter mon
                        savoir faire.
                    </p>
                    <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                    <ul className="list-disc pl-4 mb-8">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                    <h3 className="text-2xl font-semibold mb-4">Experience</h3>
                    <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-2">Ingénieur études et développement | ENOVACOM</h4>
                        <p className="mb-2">Oct 2019 - Present</p>
                        <ul className="list-disc pl-4 mb-4">
                            <li>Projet Enovacom Data Repository (J2EE, ReactJS, ElasticSearch, MariaDB, HL7 Fhir..)</li>
                            <li>Projet Score (ReactJs, HL7 Fhir)</li>
                            <li>Projet Questionnaire Form (ReactJs, HL7 Fhir)</li>
                        </ul>
                        <h4 className="text-xl font-semibold mb-2">Stage de fin d’études en développement Front-end | ENOVACOM</h4>
                        <p className="mb-2">Jun 2018 - Dec 2019</p>
                        <ul className="list-disc pl-4 mb-4">
                            <li>WebComponents pour le projet Enovacom Data Repository (Polymer)</li>
                            <li>Implemented responsive design using media queries and Bootstrap</li>
                            <li>Created and maintained documentation for internal web projects</li>
                        </ul>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Education</h3>
                    <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-2">Master en Mobiquité, Base de Données et Systèmes (MBDS)</h4>
                        <p className="mb-2">Sep 2014 - Jun 2018</p>
                    </div>
                    <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-2">Licence en IFI</h4>
                        <p className="mb-2">Sep 2014 - Jun 2018</p>
                    </div>
                    <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-2">Baccalauréat Sciences physique</h4>
                        <p className="mb-2">Sep 2014 - Jun 2018</p>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
                    <ul className="list-disc pl-4">
                        <li>Certified by LinkedIn (React, Javascript)</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default CV;
