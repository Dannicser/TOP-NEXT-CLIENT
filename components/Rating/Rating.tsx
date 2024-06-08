import { useState, KeyboardEvent } from "react";

import { IRatingProps } from "./Rating.props";

import StarIcon from "./assets/star.svg";

import cn from "classnames";

import styles from "./Rating.module.css";

export const Rating: React.FC<IRatingProps> = ({ isEditable = true, size = "medium", rating, setRating, ...props }): JSX.Element => {
  const [isSelected, setIsSelected] = useState<boolean>(() => {
    return isEditable ? false : true;
  });

  const ratingArray = [1, 2, 3, 4, 5];

  function onEnterDisplayRating(hoveredRating: number) {
    if (!isSelected) {
      setRating?.(hoveredRating);
    }
  }

  function onLeaveDisplayRating() {
    if (!isSelected) {
      setRating?.(0);
    }
  }

  function onChoseRating(chosenRating: number) {
    setRating?.(chosenRating);
    setIsSelected(true);
  }

  function onHandleEnter(e: KeyboardEvent<SVGElement>, chosenRating: number) {
    if (e.code === "Enter") {
      onChoseRating(chosenRating);
    }
  }

  return (
    <div {...props}>
      {ratingArray.map((currentRating, index) => {
        return (
          <StarIcon
            key={index}
            onClick={() => onChoseRating(currentRating)}
            onMouseEnter={() => onEnterDisplayRating(currentRating)}
            onMouseLeave={() => onLeaveDisplayRating()}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => onHandleEnter(e, currentRating)}
            className={cn(styles.star, {
              [styles.small]: size === "small",
              [styles.medium]: size === "medium",
              [styles.large]: size === "large",
              [styles.isEditable]: isEditable,
              [styles.filled]: rating >= currentRating,
            })}
            tabIndex={isEditable ? 0 : -1}
          />
        );
      })}
    </div>
  );
};
