import { animate, useMotionValue } from "motion/react"
import { FC, useState, useEffect } from "react"

export type NumberCounterProps = {
	end: number
	suffix?: string
	duration?: number
	hasComma?: boolean
}

export const NumberCounter: FC<NumberCounterProps> = ({ end, duration = 2.5, suffix, hasComma }) => {
	const count = useMotionValue(0)
	const tempCount = useMotionValue(0)
	const [displayValue, setDisplayValue] = useState(0)


	useEffect(() => {

		const mainAnimation = animate(count, end, {
			duration,
			ease: [0.25, 0.1, 0.25, 1],
			onUpdate: (latest: number) => setDisplayValue(Math.floor(latest))
		})

		// attempting the slot machine effect. leave as is and refactor later
		const slotAnimation = animate(tempCount, end * 1.5, {
			duration: duration * 0.7,
			ease: "easeIn",
			onUpdate: (latest) => {

				if (count.get() < end * 0.7) {

					const randomFactor = Math.random() * 0.2
					const randomizedValue = Math.floor(latest * (1 + randomFactor))


					const cappedValue = Math.min(randomizedValue, end * 1.8)
					setDisplayValue(cappedValue)
				}
			},
		})

		return () => {
			mainAnimation.stop()
			slotAnimation.stop()
		}

	}, [count, duration, end, tempCount])

	const formatNumber = (value: number) => {
		if (hasComma) {
			return value.toLocaleString()
		}

		return value
	}

	return (
		<span>
			{formatNumber(displayValue)}
			{suffix}
		</span>
	)
}
