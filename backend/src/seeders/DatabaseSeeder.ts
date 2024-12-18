import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Question } from '../entities/questionEntity';
import { Answer } from '../entities/answerEntity';
import { Room } from '../entities/roomEntity';

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const existingQuestions = await em.count(Question, {});

    if (existingQuestions > 0) {
      return;
    }

    const questionsData = [
      {
        question:
          'Ano ang madalas ibilin ng mga magulang sa anak na hindi dapat sayangin?',
        category: 'General',
        answers: [
          { answer: 'Pagkain', points: 53 },
          { answer: 'Pera', points: 17 },
          { answer: 'Tubig', points: 14 },
          { answer: 'Kuryente', points: 4 },
          { answer: 'Oras', points: 3 },
          { answer: 'Buhay', points: 3 }
        ]
      },
      {
        question: 'Ano ang gustong baguhin ng babae sa kanyang asawa?',
        category: 'General',
        answers: [
          { answer: 'Damit', points: 48 },
          { answer: 'Pag-uugali', points: 25 },
          { answer: 'Itsura', points: 5 },
          { answer: 'Pag-uwi ng gabi', points: 4 },
          { answer: 'Eating Habits', points: 3 },
          { answer: 'Trabaho', points: 3 }
        ]
      },
      {
        question: 'Anong bagay na kinakatakutan mo hanggang sa pagtanda?',
        category: 'Fears',
        answers: [
          { answer: 'Madilim', points: 26 },
          { answer: 'Ipis', points: 25 },
          { answer: 'Matataas na lugar', points: 17 },
          { answer: 'Clowns', points: 12 },
          { answer: 'Kamatayan', points: 54 }
        ]
      },
      {
        question: 'Anong araw ang inaabangan ng mga bata?',
        category: 'General',
        answers: [
          { answer: 'Christmas', points: 35 },
          { answer: 'Saturday', points: 18 },
          { answer: 'Birthday', points: 16 },
          { answer: 'Bakasyon/Walang pasok', points: 12 },
          { answer: 'Friday', points: 10 }
        ]
      },
      {
        question: 'Ano ang maaaring hiramin sa inyong officemate?',
        category: 'Office',
        answers: [
          { answer: 'Pens & Pencils', points: 58 },
          { answer: 'Stapler', points: 25 },
          { answer: 'Pera', points: 4 },
          { answer: 'Oras', points: 3 },
          { answer: 'Pagkain', points: 2 }
        ]
      },
      {
        question: 'Occasion na nagbibigay ng bulaklak?',
        category: 'Occasions',
        answers: [
          { answer: "Valentine's Day", points: 32 },
          { answer: 'Sa Patay', points: 22 },
          { answer: 'Anniversary', points: 14 },
          { answer: 'Birthday', points: 13 },
          { answer: "Mother's Day", points: 12 }
        ]
      },
      {
        question: 'Malamig na inumin?',
        category: 'Drinks',
        answers: [
          { answer: 'Softdrinks', points: 31 },
          { answer: 'Iced Tea', points: 18 },
          { answer: 'Tubig', points: 14 },
          { answer: 'Beer', points: 13 },
          { answer: 'Lemonade', points: 8 }
        ]
      },
      {
        question: 'Gulay na hindi green?',
        category: 'Food',
        answers: [
          { answer: 'Carrot', points: 55 },
          { answer: 'Potato', points: 9 },
          { answer: 'Talong', points: 8 },
          { answer: 'Kamatis', points: 7 },
          { answer: 'Singkamas', points: 3 }
        ]
      },
      {
        question: 'Ano ang ginagawa ng teenager na ikinagalit ng magulang?',
        category: 'Teenagers',
        answers: [
          { answer: 'Magsinungaling', points: 32 },
          { answer: 'Late umuwi', points: 22 },
          { answer: 'Sumasagot', points: 19 },
          { answer: 'Maglasing', points: 12 },
          { answer: 'Manigarilyo', points: 7 }
        ]
      },
      {
        question: 'Saan makikita ang buong pangalan ng isang tao?',
        category: 'Documents',
        answers: [
          { answer: 'Drivers License', points: 33 },
          { answer: 'Job Application', points: 31 },
          { answer: 'Birth Certificate', points: 13 },
          { answer: 'Passport', points: 11 },
          { answer: 'Check', points: 11 },
          { answer: 'ID', points: 7 }
        ]
      }
    ];

    for (const data of questionsData) {
      const question = new Question(data.question, data.category);
      await em.persistAndFlush(question);

      for (const answerData of data.answers) {
        const answer = new Answer(
          question,
          answerData.answer,
          answerData.points
        );
        await em.persistAndFlush(answer);
      }

      const room = new Room(question.question, question, 'socket-id');
      await em.persistAndFlush(room);
    }
  }
}
