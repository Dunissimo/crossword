import { FC, useEffect, useRef, useState } from "react";
import { Alert, Button } from "antd";
import Crossword, {
  CrosswordProviderImperative,
  ThemeProvider,
  AnswerTuple,
  CluesInput,
  CrosswordContext,
} from "@jaredreisinger/react-crossword";

const Crosswordd: FC = () => {
  const data = {
    across: {
      1: {
        clue: "Сотая часть числа",
        answer: "ПРОЦЕНТ",
        row: 7,
        col: 11,
      },
      5: {
        clue: "Отрезок, соединяющий центр окружности с точкой на окружности",
        answer: "РАДИУС",
        row: 4,
        col: 13,
      },
      6: {
        clue: "Направленный отрезок",
        answer: "ВЕКТОР",
        row: 9,
        col: 6,
      },
      9: {
        clue: "Треугольник, у которого две стороны равны",
        answer: "РАВНОБЕДРЕННЫЙ",
        row: 12,
        col: 15,
      },
      11: {
        clue: "Равенство, содержащее букву, значение которой надо найти",
        answer: "УРАВНЕНИЕ",
        row: 10,
        col: 16,
      },
      13: {
        clue: "Часть прямой, ограниченная двумя точками",
        answer: "ОТРЕЗОК",
        row: 17,
        col: 13,
      },
      14: {
        clue: "Одна из сторон прямоугольного треугольника, которая прилежит прямому углу",
        answer: "КАТЕТ",
        row: 2,
        col: 17,
      },
      15: {
        clue: "Единица измерения угла",
        answer: "ГРАДУС",
        row: 13,
        col: 2,
      },
      16: {
        clue: "Треугольники, у которых углы соответственно равны, а стороны пропорциональны",
        answer: "ПОДОБНЫЕ",
        row: 15,
        col: 0,
      },
      17: {
        clue: "Утверждение, принимаемое без доказательств",
        answer: "АКСИОМА",
        row: 7,
        col: 0,
      },
    },
    down: {
      2: {
        clue: "Что является графиком квадратичной функции",
        answer: "ПАРАБОЛА",
        row: 7,
        col: 11,
      },
      3: {
        clue: "Числа, которые используют при счёте",
        answer: "НАТУРАЛЬНЫЕ",
        row: 7,
        col: 16,
      },
      4: {
        clue: "Угол, градусная мера которого равна 90 градусов",
        answer: "ПРЯМОЙ",
        row: 3,
        col: 13,
      },
      7: {
        clue: "Часть плоскости, ограниченная окружностью",
        answer: "КРУГ",
        row: 2,
        col: 17,
      },
      8: {
        clue: "Угол, обе стороны которого лежат на одной прямой",
        answer: "РАЗВЁРНУТЫЙ",
        row: 6,
        col: 6,
      },
      10: {
        clue: "Чертёж, наглядно изображающий зависимость одной величины от другой",
        answer: "ГРАФИК",
        row: 4,
        col: 8,
      },
      12: {
        clue: "Многоугольник, у которого все стороны равны, все углы равны",
        answer: "ПРАВИЛЬНЫЙ",
        row: 15,
        col: 0,
      },
      18: {
        clue: "Сумма длин всех сторон многоугольника",
        answer: "ПЕРИМЕТР",
        row: 1,
        col: 20,
      },
      19: {
        clue: "Зависимость одной переменной от другой",
        answer: "ФУНКЦИЯ",
        row: 4,
        col: 1,
      },
      20: {
        clue: "Первая из точек декартовых координат",
        answer: "АБСЦИССА",
        row: 3,
        col: 3,
      },
    },
  };
  const [isFinished, setFinished] = useState(false);
  const ref = useRef<CrosswordProviderImperative | null>(null);

  const clickHandler = () => {
    if (ref.current) {
      ref.current.fillAllAnswers();
      ref.current.focus();
    }
  };
  const resetHandler = () => {
    if (ref.current) {
      ref.current.reset();
      ref.current.focus();
    }
  };

  const finishHandler = () => {
    setFinished(true);
  };

  return (
    <div className="crossword" style={{ paddingTop: "1rem" }}>
      {isFinished ? (
        <Alert
          style={{
            position: "fixed",
            top: "80%",
            left: "45%",
            transform: "translateX(-50%)",
            zIndex: 100,
            margin: "1rem",
            marginTop: 0,
          }}
          type="success"
          message={"Выполнено!"}
          description={"Кроссворд решён  верно!"}
          closable
          showIcon
        ></Alert>
      ) : null}
      <Crossword
        theme={{ columnBreakpoint: "768px", numberColor: "#000" }}
        acrossLabel={"Вертикаль"}
        downLabel={"Горизонталь"}
        ref={ref}
        data={data}
        onCrosswordCorrect={finishHandler}
      />
      <Button type="primary" onClick={clickHandler}>
        Решить кроссворд полностью
      </Button>
      <Button
        danger
        type="primary"
        onClick={resetHandler}
        style={{ marginLeft: "1rem" }}
      >
        Очистить кроссворд
      </Button>
    </div>
  );
};

export default Crosswordd;
